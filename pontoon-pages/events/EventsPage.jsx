var React = require('react');
var Link = require('react-router').Link;

var HeroUnit = require('../../components/hero-unit.jsx');
var IconLinks = require('../../components/icon-links.jsx');
var IconLink = require('../../components/icon-link.jsx');
var Illustration = require('../../components/illustration.jsx');

import { FormattedHTMLMessage } from 'react-intl';

var EventsPage = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  statics: {
    pageTitle: 'Events',
    pageClassName: 'events'
  },
  render: function() {
    return (
      <div>
        <HeroUnit>
          <h1>
            {this.context.intl.formatMessage({id: 'join_maker_party'})}
          </h1>
          <h1>
            {this.context.intl.formatMessage({id: 'make_a_diff'})}
          </h1>
          <div>
            <a href="#" className="btn">
              {this.context.intl.formatMessage({id: 'get_started'})}
            </a>
          </div>
          <div>
            <FormattedHTMLMessage
              id="already_have_event"
              values={{
                login: "#"
              }}
            />
          </div>
        </HeroUnit>
        <div className="inner-container">
          <div className="mui-tab-switcher">
            <div className="tabs">
              <span className="btn active">
                <Link to={"/" + this.context.intl.locale + "/pontoon/events"}>
                  {this.context.intl.formatMessage({id: 'overview'})}
                </Link>
              </span>
              <span className="btn">
                <Link to={"/" + this.context.intl.locale + "/pontoon/events/resources"}>
                  {this.context.intl.formatMessage({id: 'host_resources'})}
                </Link>
              </span>
            </div>
          </div>
        </div>

        <div className="inner-container">
          <section className="join-global-movement">
            <Illustration
            height={183} width={156}
            src1x="/img/pages/events/svg/maker-party-logo.svg"
            alt="Maker Party logo"
            className="content-first"
            >
              <h2>
                {this.context.intl.formatMessage({id: 'what_is_maker_party'})}
              </h2>
              <p>
                {this.context.intl.formatMessage({id: 'maker_party_paragraph_1'})}
              </p>
              <p>
                {this.context.intl.formatMessage({id: 'maker_party_paragraph_2'})}
              </p>
              <p>
                {this.context.intl.formatMessage({id: 'maker_party_paragraph_3'})}
              </p>
            </Illustration>
          </section>
        </div>

        <div className="inner-container">
          <section>
            <Illustration
              height={244} width={244}
              src1x="/img/pages/events/maker-party-quote.png"
              alt="Maker Party logo"
            >
              <h2>
                {this.context.intl.formatMessage({id: 'why_love_maker_party'})}
              </h2>
              <p>
                {this.context.intl.formatMessage({id: 'maker_party_testimonial_1'})}
              </p>
              <p>
                {this.context.intl.formatMessage({id: 'maker_party_testimonial_2'})}
              </p>
            </Illustration>
          </section>

          <div className="row full-row quote">
            <section>
              <div className="text-center">
                <p>
                  {this.context.intl.formatMessage({id: 'maker_party_blockquote'})}
                </p>
                <a href="#" className="btn">
                  {this.context.intl.formatMessage({id: 'learn_more'})}
                </a>
              </div>
            </section>
          </div>

          <section>
            <IconLinks>
              <IconLink
                link="#"
                imgSrc="/img/pages/events/svg/icon-community.png"
                head={this.context.intl.formatMessage({id: 'partner'})}
                subhead={this.context.intl.formatMessage({id: 'become_maker_party_partner'})}
              />
              <IconLink
                link="#"
                imgSrc="/img/pages/events/svg/icon-join.svg"
                head={this.context.intl.formatMessage({id: 'press'})}
                subhead={this.context.intl.formatMessage({id: 'maker_party_press'})}
              />
              <IconLink
                link="#"
                imgSrc="/img/pages/events/svg/icon-home-help.png"
                head={this.context.intl.formatMessage({id: 'contact'})}
                subhead={this.context.intl.formatMessage({id: 'maker_party_contact'})}
              />
            </IconLinks>
          </section>
        </div>
      </div>
    );
  }
});

module.exports = EventsPage;
