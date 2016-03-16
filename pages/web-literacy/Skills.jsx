var React = require('react');
var HeroUnit = require('../../components/hero-unit.jsx');
var Illustration = require('../../components/illustration.jsx');
var OutboundLink = require('react-ga').OutboundLink;
var skills = require('./skillsdata');
var makeLinksFromCompetencies = require("./MakeLinksFromCompetencies.jsx");

module.exports = React.createClass({
  statics: {
    pageTitle: '21st Century Skills',
    pageClassName: 'web-literacy-skills-page'
  },
  render: function() {
    var whitepaperLink = "https://mozilla.github.io/webmaker-whitepaper";
    return (
      <div>
        <HeroUnit>
          <h1>21st Century Skills</h1>
          <h2>A broad set of knowledge, skills, habits and traits that are important to succeed in today's world</h2>
        </HeroUnit>
        <div className="inner-container activities">
          <section>
            <p>
              As people learn to read, write, and participate on the web, a cross-cutting set of 21C Skills emerge as skills critical to success in today’s world. They enable individuals to become teachers, advocates, and community leaders to leverage and advance the web as an open and public resource. The following 21C Skills correspond to the specific web literacy skills indicated below:
            </p>
            {
              skills.map(function(skill) {
                return (
                  <Illustration
                    width={200} height={200}
                    src1x={skill.imgSrc1x}
                    src2x={skill.imgSrc2x}
                    alt="">
                    <h2>{skill.name}</h2>
                    <p>{skill.content}</p>
                    {
                      Object.keys(skill.topics).map(function(topic) {
                        return (
                          <div><b>{topic}:</b> {makeLinksFromCompetencies(skill.topics[topic])}</div>
                        );
                      })
                    }
                  </Illustration>
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
      </div>
    );
  }
});
