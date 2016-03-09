var React = require('react');
var HeroUnit = require('../../components/hero-unit.jsx');
var Illustration = require('../../components/illustration.jsx');
var OutboundLink = require('react-ga').OutboundLink;

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
              Start teaching others how to read, write and participate on the web with these free activities created by teachers, educators and technologists like you. Each featured activity includes step-by-step instructions and has been tested in schools, afterschool programs, libraries and community centers around the globe. Whether learning how to code, understanding why privacy matters, or creating openly-licensed web content, we believe teaching the web should be fun and engaging!
            </p>
            <Illustration
              width={200} height={200}
              src1x="/img/pages/clubs/intro-photo.png"
              src2x="/img/pages/clubs/intro-photo@2x.png"
              alt="">
              <h2>Problem-Solving</h2>
              <p>Formulating problems, and developing and testing solutions through research, analysis, rapid prototyping, and feedback.</p>
              <div><b>Read</b>: Search, Navigate, Synthesize, Evaluate</div>
              <div><b>Write</b>: Design, Compose, Code, Revise, Remix</div>
              <div><b>Participate</b>: Share, Contribute, Connect, Protect, Open Practice</div>
            </Illustration>
            <Illustration
              width={200} height={200}
              src1x="/img/pages/clubs/intro-photo.png"
              src2x="/img/pages/clubs/intro-photo@2x.png"
              alt="">
              <h2>Creativity</h2>
              <p>Generating, connecting, synthesizing, transforming, and refining new and existing ideas.</p>
              <div><b>Write</b>: Design, Revise, Remix</div>
              <div><b>Participate</b>: Share, Contribute, Open Practice</div>
            </Illustration>
            <Illustration
              width={200} height={200}
              src1x="/img/pages/clubs/intro-photo.png"
              src2x="/img/pages/clubs/intro-photo@2x.png"
              alt="">
              <h2>Communication</h2>
              <p>Presenting messages effectively using oral, written, and nonverbal signals.</p>
              <div><b>Read</b>: Synthesize</div>
              <div><b>Write</b>: Compose, Remix</div>
              <div><b>Participate</b>: Share, Contribute, Connect, Open Practice</div>
            </Illustration>
            <Illustration
              width={200} height={200}
              src1x="/img/pages/clubs/intro-photo.png"
              src2x="/img/pages/clubs/intro-photo@2x.png"
              alt="">
              <h2>Collaboration</h2>
              <p>Interacting and working appropriately with diverse audiences and teams; demonstrating active listening, interacting and contributing constructively in group discussions and meetings; using appropriate technology tools for working together including resolving conflicts on group projects; and sharing responsibility for group work and valuing individual contributions.</p>
              <div><b>Participate</b>: Share, Contribute, Connect, Open Practice</div>
            </Illustration>
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
