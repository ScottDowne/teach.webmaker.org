var React = require('react');
var OutboundLink = require('react-ga').OutboundLink;

var Illustration = require('../../components/illustration.jsx');

var webmaps = require('./webmaplisting.jsx');

var CircleTree = require('react-circletree/es5');
var weblitdata = require('./weblitdata');
var weblitcontent = require('./weblitcontent');
var activitydata = require('./activitydata');
var categories = require('./categories');
var weblitcolors = require('./colors');
var topicContent = weblitcontent.topics;
var skillsContent = weblitcontent.skills;

var Topic = React.createClass({
  render: function() {
    var className = "topic-item";
    var content = "";
    if (this.props.selectedTopic) {
      if (this.props.selectedTopic !== this.props.topic) {
        className += " hidden";
      } else if (this.props.skills[this.props.selectedSkill]) {
        // We're displaying a skill.
        content = (
          <div>
            <span>{this.props.selectedTopic} &gt; </span><span>{this.props.selectedSkill}</span>
            <SkillItem skill={this.props.selectedSkill}/>
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
            <span><b>Skills:</b> {Object.keys(this.props.skills).join(", ")}</span>
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
            <span><b>Skills:</b> {Object.keys(this.props.skills).join(", ")}</span>
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
var SkillItem = React.createClass({
  render: function() {
    return (
      <div>
        <p>{skillsContent[this.props.skill].quote}</p>
        {
          skillsContent[this.props.skill].content.map(function(value, index) {
            return (
              <p key={index}>
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
  checkTopicForSkills: function() {
    var selectedTopic = this.props.selectedTopic;
    if (!selectedTopic) {
      return;
    }
    var skills = this.props.competencies;
    var topicSkills = Object.keys(weblitdata["WEB LITERACY"][this.props.selectedTopic]);
    return skills.some(function(skill) {
      return topicSkills.indexOf(skill) !== -1;
    });
  },
  render: function() {
    if (this.props.competencies.indexOf(this.props.selectedSkill) !== -1 ||
        this.checkTopicForSkills()) {
      return (
        <div key={this.props.name}>
          <Illustration
            width={200} height={200}
            src1x={this.props.src1x}
            src2x={this.props.src2x}
            alt="">
            <h2>{this.props.name}</h2>
            <a href="">{this.props.difficulty}</a>
            <a href="">{this.props.duration}</a>
            <p>{this.props.content}</p>
            <span><b>Competencies:</b> {this.props.competencies.join(", ")}</span>
            <span><b>21C Skills:</b> {this.props.skills.join(", ")}</span>
          </Illustration>
        </div>
      );
    }
    return (<div key={this.props.name}></div>);
  }
});

var WebLiteracyPage = React.createClass({
  statics: {
    pageTitle: "Web Literacy",
    pageClassName: "web-literacy"
  },
  getInitialState: function() {
    return {
      topic: "",
      skill: ""
    };
  },
  onMapToggle: function(labels) {
    this.setState({
      topic: labels[1] || "",
      skill: labels[2] || ""
    });
  },
  render: function() {
    var whitepaperLink = "https://mozilla.github.io/webmaker-whitepaper";
    var selectedTopic = this.state.topic;
    var selectedSkill = this.state.skill;
    return (
      <div className="inner-container">
        <h1>Web Literacy</h1>

        <section className="intro">
          <p>
            A framework for entry-level web literacy &amp; 21st Century skills. Explore the map
            by selecting what you want to learn more about, to see definitions and activities.
          </p>
        </section>

        <section className="weblit-nav">
          <CircleTree data={weblitdata} color={weblitcolors} onToggle={this.onMapToggle}/>
          <div className="c21-skills">
            <h3>21st Century Skills</h3>
            <ul>
            {
              Object.keys(categories).map(function(cat) {
                return (
                  <li className={cat} key={cat}>
                  <span className="icon">[☺]</span>
                  { categories[cat] }
                  </li>
                );
              })
            }
            </ul>
          </div>
        </section>
        <section>
        {
          Object.keys(weblitdata["WEB LITERACY"]).map(function(topic) {
            return (
              <Topic
                selectedTopic={selectedTopic}
                selectedSkill={selectedSkill}
                topic={topic}
                skills={weblitdata["WEB LITERACY"][topic]}
                src1x="/img/pages/clubs/intro-photo.png"
                src2x="/img/pages/clubs/intro-photo@2x.png"
                content={topicContent[topic].content}
              />
            );
          })
        }
        </section>
        <section>
          <h2>Related {selectedTopic} Activities</h2>
        {
          activitydata.map(function(activity) {
            return (
              <Activity
                selectedTopic={selectedTopic}
                selectedSkill={selectedSkill}
                topic={activity.topic}
                name={activity.name}
                src1x="/img/pages/clubs/intro-photo.png"
                src2x="/img/pages/clubs/intro-photo@2x.png"
                content={activity.content}
                duration={activity.duration}
                difficulty={activity.difficulty}
                competencies={activity.competencies}
                skills={activity.skills}
              />
            );
          })
        }
        </section>
        <section className="text-center">
          <div className="vertical-divider"></div>
          <h3 className="text-center">Read our whitepaper on why Mozilla cares about Web Literacy.</h3>
          <OutboundLink to={whitepaperLink} eventLabel={whitepaperLink} className="btn btn-awsm">
            Read whitepaper <i className="fa fa-external-link"></i>
          </OutboundLink>
        </section>
      </div>
    );
  }
});

module.exports = WebLiteracyPage;
