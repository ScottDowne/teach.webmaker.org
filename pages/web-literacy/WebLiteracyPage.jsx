var React = require('react');
var OutboundLink = require('react-ga').OutboundLink;
var ReactRouter = require('react-router');
var History = ReactRouter.History;
var Link = ReactRouter.Link;

var Illustration = require('../../components/illustration.jsx');

var webmaps = require('./webmaplisting.jsx');

var CircleTree = require('react-circletree/es5');
var weblitdataroot = require('./weblitdata');
var weblitdata = weblitdataroot["WEB LITERACY"];
var weblitcontent = require('./weblitcontent');
var activitydata = require('./activitydata');
var categories = require('./categories');
var weblitcolors = require('./colors');
var topicContent = weblitcontent.topics;
var webLitSkillsContent = weblitcontent.webLitSkills;
var makeLinksFromWebLitSkills = require("./MakeLinksFromWebLitSkills.jsx");

var Topic = React.createClass({
  render: function() {
    var className = "topic-item";
    var content = null;
    if (this.props.selectedTopic) {
      if (this.props.selectedTopic !== this.props.topic) {
        className += " hidden";
      } else if (this.props.webLitSkills[this.props.selectedWebLitSkill]) {
        className += " active";
        // We're displaying a web lit skill.
        content = (
          <div>
            <h2><span className="lighten">{this.props.selectedTopic} &rsaquo;</span> {this.props.selectedWebLitSkill}</h2>
            <WebLitSkillItem webLitSkill={this.props.selectedWebLitSkill}/>
            <div><b>21C Skills:</b> <Link to="web-literacy/skills">{weblitdata[this.props.selectedTopic][this.props.selectedWebLitSkill].join(", ")}</Link></div>
          </div>
        );
      } else {
        className += " active";
        // We're displaying a selected topic.
        content = (
          <div>
            <h2>{this.props.topic}</h2>
            <Illustration
              width={200} height={200}
              src1x={this.props.src1x}
              src2x={this.props.src2x}
              alt="">
              <p>{topicContent[this.props.topic].content}</p>
            </Illustration>
            <span><b>Web Literacy Skills:</b> {makeLinksFromWebLitSkills(Object.keys(this.props.webLitSkills))}</span>
          </div>
        );
      }
    } else {
      // We're displaying all topics on top of each other.
      content = (
        <div>
          <Illustration
            width={200} height={200}
            src1x={this.props.src1x}
            src2x={this.props.src2x}
            alt="">
            <h2>{this.props.topic}</h2>
            <p>{topicContent[this.props.topic].content}</p>
            <span><b>Web Literacy Skills:</b> {makeLinksFromWebLitSkills(Object.keys(this.props.webLitSkills))}</span>
          </Illustration>
        </div>
      );
    }
    return (
      <div key={this.props.topic} className={className}>
        <div>
          {content}
        </div>
      </div>
    );
  }
});
var WebLitSkillItem = React.createClass({
  render: function() {
    return (
      <div className="web-lit-skill-item">
        <h3 className="web-lit-skill-quote">{webLitSkillsContent[this.props.webLitSkill].quote}</h3>
        {
          webLitSkillsContent[this.props.webLitSkill].content.map(function(value, index) {
            return (
              <p className="web-lit-skill-paragraph" key={index}>
                {value}
              </p>
            );
          })
        }
      </div>
    );
  }
});
var Activity = React.createClass({
  render: function() {
    return (
      <Illustration
        width={200} height={200}
        src1x={this.props.src1x}
        src2x={this.props.src2x}
        alt="">
        <h2>{this.props.name}</h2>
        <span className="difficulty-link"><i className="fa fa-users"></i>{this.props.difficulty}</span>
        <span><i className="fa fa-clock-o"></i>{this.props.duration}</span>
        <p>{this.props.content}</p>
        <div><b>Web Literacy SKills:</b> {makeLinksFromWebLitSkills(this.props.webLitSkills)}</div>
        <div><b>21C Skills:</b> <Link to="web-literacy/skills">{this.props.skills.join(", ")}</Link></div>
      </Illustration>
    );
  }
});

module.exports = React.createClass({
  mixins: [History],
  statics: {
    pageTitle: "Web Literacy",
    pageClassName: "web-literacy"
  },
  updateMapNavState: function() {
    var topic = this.props.params.verb || "";
    var webLitSkill = this.props.params.webLitSkill || "";
    if (this.state.topic !== topic || this.state.webLitSkill !== webLitSkill) {
      this.setState({
        topic: topic,
        webLitSkill: webLitSkill
      });
    }
  },
  componentDidUpdate: function() {
    this.updateMapNavState();
  },
  componentDidMount: function() {
    this.updateMapNavState();
  },
  hasWebLitSkillIn: function(webLitSkills) {
    var webLitSkill = this.state.webLitSkill;
    if (webLitSkill && webLitSkills.indexOf(webLitSkill) !== -1) {
      return true;
    }
  },
  hasMatchingWebLitSkillIn: function(webLitSkills) {
    var selectedTopic = this.state.topic;
    if (!selectedTopic || this.state.webLitSkill) {
      return false;
    }
    var topicWebLitSkills = Object.keys(weblitdata[selectedTopic]);
    return webLitSkills.some(function(webLitSkill) {
      return topicWebLitSkills.indexOf(webLitSkill) !== -1;
    });
  },
  renderActivities: function() {
    var selectedTopic = this.state.topic;
    var selectedWebLitSkill = this.state.webLitSkill;
    var hasWebLitSkillIn = this.hasWebLitSkillIn;
    var hasMatchingWebLitSkillIn = this.hasMatchingWebLitSkillIn;

    var activities = [];
    activitydata.forEach(function(activity, index) {
      if (hasWebLitSkillIn(activity.webLitSkills) || hasMatchingWebLitSkillIn(activity.webLitSkills)) {
        activities.push(
          <div className="activity-item" key={index}>
            <Activity
              selectedTopic={selectedTopic}
              selectedWebLitSKill={selectedWebLitSkill}
              topic={activity.topic}
              name={activity.name}
              src1x={activity.imgSrc1x}
              src2x={activity.imgSrc2x}
              content={activity.content}
              duration={activity.duration}
              difficulty={activity.difficulty}
              webLitSkills={activity.webLitSkills}
              skills={activity.skills}
            />
          </div>
        );
      }
    });

    if (!activities.length) {
      return null;
    } else {
      return (
        <div>
          <h2>Related {selectedWebLitSkill || selectedTopic} Activities</h2>
          {activities}
        </div>
      );
    }
  },
  hasCategory: function(cat) {
    var cat = categories[cat];
    var selectedVerb = this.state.topic;
    var selectedWebLitSkill = this.state.webLitSkill;

    if (!selectedVerb) {
      return true;
    }

    if (!selectedWebLitSkill) {
      return Object.keys(weblitdata[selectedVerb]).some(function(item) {
        return weblitdata[selectedVerb][item].indexOf(cat) !== -1;
      });
    }

    return weblitdata[selectedVerb][selectedWebLitSkill].indexOf(cat) !== -1;
  },
  getInitialState: function() {
    return {
      topic: "",
      webLitSkill: ""
    };
  },
  onMapToggle: function(labels) {
    var verb =  labels[1] || "";
    var webLitSkill = labels[2] || "";
    var url = "/web-literacy/";
    if (verb) {
      url += verb + "/";
      if (webLitSkill) {
        url += webLitSkill + "/";
      }
    }
    this.history.pushState(null, url);
  },
  render: function() {
    var whitepaperLink = "https://mozilla.github.io/webmaker-whitepaper";
    var selectedTopic = this.state.topic;
    var selectedWebLitSkill = this.state.webLitSkill;
    var hasCategory = this.hasCategory;
    return (
      <div>
        <div className="inner-container">
          <h1>Web Literacy</h1>

          <section className="intro">
            <p>
              A framework for entry-level web literacy &amp; 21st Century skills. Explore the map
              by selecting what you want to learn more about, to see definitions and activities.
            </p>
          </section>

          <section className="weblit-nav">
            <CircleTree data={weblitdataroot} color={weblitcolors} onToggle={this.onMapToggle}/>
            <div className="c21-skills">
              <h3>21st Century Skills</h3>
              <ul>
              {
                Object.keys(categories).map(function(cat) {
                  var className = cat;
                  if (hasCategory(cat)) {
                    className += " active-skill";
                  }
                  return (
                    <li className={className} key={cat}>
                    <span className="icon">[☺]</span>
                    { categories[cat] }
                    </li>
                  );
                })
              }
              </ul>
            </div>
          </section>
        </div>
        {
          Object.keys(weblitdata).map(function(topic) {
            return (
              <Topic
                selectedTopic={selectedTopic}
                selectedWebLitSkill={selectedWebLitSkill}
                topic={topic}
                webLitSkills={weblitdata[topic]}
                src1x={topicContent[topic].imgSrc1x}
                src2x={topicContent[topic].imgSrc2x}
                content={topicContent[topic].content}
              />
            );
          })
        }
        <div className="inner-container">
          <section>
            {this.renderActivities()}
          </section>
          <section className="text-center">
            <div className="vertical-divider"></div>
            <h3 className="text-center">Read our whitepaper on why Mozilla cares about Web Literacy.</h3>
            <OutboundLink to={whitepaperLink} eventLabel={whitepaperLink} className="btn btn-awsm">
              Read whitepaper <i className="fa fa-external-link"></i>
            </OutboundLink>
          </section>
        </div>
      </div>
    );
  }
});
