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
var competenciesContent = weblitcontent.competencies;

var Topic = React.createClass({
  render: function() {
    var className = "topic-item";
    var content = null;
    if (this.props.selectedTopic) {
      if (this.props.selectedTopic !== this.props.topic) {
        className += " hidden";
      } else if (this.props.competencies[this.props.selectedCompetency]) {
        className += " active";
        // We're displaying a competency.
        content = (
          <div>
            <h2><span className="lighten">{this.props.selectedTopic} &rsaquo;</span> {this.props.selectedCompetency}</h2>
            <CompetencyItem competency={this.props.selectedCompetency}/>
            <div><b>21C Skills:</b> {weblitdata["WEB LITERACY"][this.props.selectedTopic][this.props.selectedCompetency].join(", ")}</div>
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
            <span><b>Competencies:</b> {Object.keys(this.props.competencies).join(", ")}</span>
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
            <span><b>Competencies:</b> {Object.keys(this.props.competencies).join(", ")}</span>
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
var CompetencyItem = React.createClass({
  render: function() {
    return (
      <div className="competency-item">
        <h3 className="competency-quote">{competenciesContent[this.props.competency].quote}</h3>
        {
          competenciesContent[this.props.competency].content.map(function(value, index) {
            return (
              <p className="competency-paragraph" key={index}>
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
        <a className="difficulty-link" href="">{this.props.difficulty}</a>
        <a href="">{this.props.duration}</a>
        <p>{this.props.content}</p>
        <div><b>Competencies:</b> {this.props.competencies.join(", ")}</div>
        <div><b>21C Skills:</b> {this.props.skills.join(", ")}</div>
      </Illustration>
    );
  }
});

module.exports = React.createClass({
  statics: {
    pageTitle: "Web Literacy",
    pageClassName: "web-literacy"
  },
  hasCompetencyIn: function(competencies) {
    var competency = this.state.competency;
    if (competency && competencies.indexOf(competency) !== -1) {
      return true;
    }
  },
  hasMatchingCompetencyIn: function(competencies) {
    var selectedTopic = this.state.topic;
    if (!selectedTopic || this.state.competency) {
      return false;
    }
    var topicCompetencies = Object.keys(weblitdata["WEB LITERACY"][selectedTopic]);
    return competencies.some(function(competency) {
      return topicCompetencies.indexOf(competency) !== -1;
    });
  },
  renderActivities: function() {
    var selectedTopic = this.state.topic;
    var selectedCompetency = this.state.competency;
    var hasCompetencyIn = this.hasCompetencyIn;
    var hasMatchingCompetencyIn = this.hasMatchingCompetencyIn;

    var activities = [];
    activitydata.forEach(function(activity, index) {
      if (hasCompetencyIn(activity.competencies) || hasMatchingCompetencyIn(activity.competencies)) {
        activities.push(
          <div className="activity-item" key={index}>
            <Activity
              selectedTopic={selectedTopic}
              selectedCompetency={selectedCompetency}
              topic={activity.topic}
              name={activity.name}
              src1x={activity.imgSrc1x}
              src2x={activity.imgSrc2x}
              content={activity.content}
              duration={activity.duration}
              difficulty={activity.difficulty}
              competencies={activity.competencies}
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
          <h2>Related {selectedCompetency || selectedTopic} Activities</h2>
          {activities}
        </div>
      );
    }
  },
  getInitialState: function() {
    return {
      topic: "",
      competency: ""
    };
  },
  onMapToggle: function(labels) {
    this.setState({
      topic: labels[1] || "",
      competency: labels[2] || ""
    });
  },
  render: function() {
    var whitepaperLink = "https://mozilla.github.io/webmaker-whitepaper";
    var selectedTopic = this.state.topic;
    var selectedCompetency = this.state.competency;
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
        </div>
        {
          Object.keys(weblitdata["WEB LITERACY"]).map(function(topic) {
            return (
              <Topic
                selectedTopic={selectedTopic}
                selectedCompetency={selectedCompetency}
                topic={topic}
                competencies={weblitdata["WEB LITERACY"][topic]}
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
