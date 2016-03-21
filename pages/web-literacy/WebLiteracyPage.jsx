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

function makeLinksFrom21CSkills(skills21C) {
  return (
    <span>
    {
      skills21C.map(function(skill21C, index) {
        var comma = "";
        if (index+1 < skills21C.length) {
          comma = ", ";
        }
        return (
          <span>
            {categories[skill21C]}
            {comma}
          </span>
        );
      })
    }
    </span>
  );
} 

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
              width={100} height={100}
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
            width={150} height={150}
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
        <div><b>21C Skills:</b> <Link to="web-literacy/skills">{makeLinksFrom21CSkills(this.props.skills)}</Link></div>
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
    var state = {};
    if (this.state.topic !== topic || this.state.webLitSkill !== webLitSkill) {
      state.topic = topic;
      state.webLitSkill = webLitSkill;
      this.setState(state);
    }
  },
  componentDidUpdate: function() {
    this.updateMapNavState();
  },
  componentDidMount: function() {
    this.updateMapNavState();
  },
  getInitialState: function() {
    var filter = {};
    Object.keys(categories).map(function(cat) {
      filter[categories[cat]] = false;
    });
    return {
      topic: "",
      webLitSkill: "",
      filter: filter
    };
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
  hasMatching21CSkillIn: function(skills21C) {
    var state = this.state;
    var hasCategory = this.hasCategory;
    return skills21C.some(function(skill21C) {
      return !state.filter[categories[skill21C]] && hasCategory(skill21C, state.topic, state.webLitSkill);
    });
  },
  hasCategory: function(cat, selectedVerb, selectedWebLitSkill) {
    var cat = categories[cat];

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
  renderActivities: function() {
    var selectedTopic = this.state.topic;
    var selectedWebLitSkill = this.state.webLitSkill;
    var hasWebLitSkillIn = this.hasWebLitSkillIn;
    var hasMatchingWebLitSkillIn = this.hasMatchingWebLitSkillIn;
    var hasMatching21CSkillIn = this.hasMatching21CSkillIn;

    var activities = [];
    activitydata.forEach(function(activity, index) {
      if ((hasWebLitSkillIn(activity.webLitSkills) || hasMatchingWebLitSkillIn(activity.webLitSkills)) && hasMatching21CSkillIn(activity.skills)) {
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
  skillCheckboxUpdated: function(checkbox, checked) {
    var state = {
      filter: this.state.filter
    };
    state.filter[checkbox] = !checked;
    this.setState(state);
  },
  render: function() {
    var whitepaperLink = "http://mozilla.github.io/content/web-lit-whitepaper/";
    var selectedTopic = this.state.topic;
    var selectedWebLitSkill = this.state.webLitSkill;
    var hasCategory = this.hasCategory;
    var state = this.state;
    var skillCheckboxUpdated = this.skillCheckboxUpdated;

    var filter = this.state.filter;
    return (
      <div>
        <div className="inner-container">
          <section>
            <h1>Web Literacy</h1>
            <p>
              A framework for entry-level web literacy &amp; 21st Century skills. Explore the map
              by selecting what you want to learn more about, to see definitions and activities.
            </p>
          </section>
          <section className="weblit-nav">
            <div className="c21-skills">
              <Link to="web-literacy/skills"><h3>21st Century Skills</h3></Link>
              <ul>
              {
                Object.keys(categories).map(function(cat) {
                  var className = cat;
                  var checked = false;
                  if (hasCategory(cat, selectedTopic, selectedWebLitSkill)) {
                    className += " active-skill";
                    checked = !state.filter[categories[cat]];
                  }
                  return (
                    <li className={className} key={cat}>
                      <span className="custom-checkbox-container">
                        <input onChange={function() {
                          skillCheckboxUpdated(categories[cat], !checked);
                        }} checked={checked} className="checkbox-input" type="checkbox" id={cat + "-checkbox"}/>
                        <label className="checkbox-label" htmlFor={cat + "-checkbox"}>
                          <span className="custom-checkbox">
                            <i className="fa fa-check"></i>
                          </span>
                          { categories[cat] }
                        </label>
                      </span>
                    </li>
                  );
                })
              }
              </ul>
            </div>
            <CircleTree data={weblitdataroot} filter={filter} color={weblitcolors} onToggle={this.onMapToggle}/>
          </section>
          <section>
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
