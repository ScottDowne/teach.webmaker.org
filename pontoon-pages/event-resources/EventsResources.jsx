var React = require('react');
var Link = require('react-router').Link;

var HeroUnit = require('../../components/hero-unit.jsx');
var IconLinks = require('../../components/icon-links.jsx');
var IconLink = require('../../components/icon-link.jsx');
var Illustration = require('../../components/illustration.jsx');

var Tabs = require('./tabs.jsx');

var LogoAsset = require('./LogoAsset.jsx');
var Tabulator = require('./Tabulator.jsx');

var LogoAssetLink = require('./LogoAssetLink.jsx');
var RemixLink = require('./RemixLink.jsx');

import { FormattedHTMLMessage } from 'react-intl';

var EventsResources = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  statics: {
    pageTitle: 'Event Resources',
    pageClassName: 'event-resources',
    LogoAsset: LogoAsset
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
              <span className="btn">
                <Link to={"/" + this.context.intl.locale + "/pontoon/events"}>
                  {this.context.intl.formatMessage({id: 'overview'})}
                </Link>
              </span>
              <span className="btn active">
                <Link to={"/" + this.context.intl.locale + "/pontoon/events/resources"}>
                  {this.context.intl.formatMessage({id: 'host_resources'})}
                </Link>
              </span>
            </div>
          </div>
        </div>

        <div className="inner-container">
          <section>
            <h2>
              {this.context.intl.formatMessage({id: 'host_maker_party'})}
            </h2>
            <p>
              {this.context.intl.formatMessage({id: 'host_maker_party_paragraph'})}
            </p>
          </section>

          <section>
            <h2>
              {this.context.intl.formatMessage({id: 'maker_party_activities'})}
            </h2>
          </section>

          <section>
            <Illustration
            height={183} width={250}
            src1x="/img/pages/events/meme.png"
            alt="Maker Party logo"
            >
              <a href="#">
                {this.context.intl.formatMessage({id: 'maker_party_activity_1_title'})}
              </a>
              <p>
                {this.context.intl.formatMessage({id: 'maker_party_activity_1_body'})}
              </p>
            </Illustration>
            <Illustration
            height={183} width={250}
            src1x="/img/pages/events/contribute.png"
            alt="Maker Party logo"
            >
              <a href="#">
                {this.context.intl.formatMessage({id: 'maker_party_activity_2_title'})}
              </a>
              <p>
                {this.context.intl.formatMessage({id: 'maker_party_activity_2_body'})}
              </p>
            </Illustration>
            <Illustration
            height={183} width={250}
            src1x="/img/pages/events/hack.png"
            alt="Maker Party logo"
            >
              <a href="#">
                {this.context.intl.formatMessage({id: 'maker_party_activity_3_title'})}
              </a>
              <p>
                {this.context.intl.formatMessage({id: 'maker_party_activity_3_body'})}
              </p>
            </Illustration>
            <Illustration
            height={183} width={250}
            src1x="/img/pages/events/hack.png"
            alt="Maker Party logo"
            >
              <a href="#">
                {this.context.intl.formatMessage({id: 'maker_party_activity_4_title'})}
              </a>
              <p>
                {this.context.intl.formatMessage({id: 'maker_party_activity_4_body'})}
              </p>
            </Illustration>
          </section>

          <section>
            <h2 id="event-details">
              {this.context.intl.formatMessage({id: 'event_details'})}
            </h2>
            <p>
              {this.context.intl.formatMessage({id: 'maker_party_event_details'})}
            </p>
            <Tabulator tabs={Tabs}/>
          </section>

          <section>
            <h2 id="logo-assets">
              {this.context.intl.formatMessage({id: 'logos_and_assets'})}
            </h2>
            <p>
              {this.context.intl.formatMessage({id: 'maker_party_logo_and_assets'})}
            </p>

            <div className="row">
              <LogoAsset head={this.context.intl.formatMessage({id: 'maker_party_logo'})}
              alt="Maker Party Logo Image"
              src1x="/img/pages/event-resources/resource-thumbnails-01.png"
              src2x="/img/pages/event-resources/resource-thumbnails-01@2x.png">
                <LogoAssetLink href="https://stuff.webmaker.org/teach.mozilla.org/MakerPartyLogo.eps">
                  {this.context.intl.formatMessage({id: 'download_eps'})}
                </LogoAssetLink>
                <LogoAssetLink href="https://stuff.webmaker.org/teach.mozilla.org/MakerPartyLogo.png">
                  {this.context.intl.formatMessage({id: 'download_png'})}
                </LogoAssetLink>
              </LogoAsset>
              <LogoAsset head={this.context.intl.formatMessage({id: 'brand_palette'})}
              alt="Brand Palette Image"
              src1x="/img/pages/event-resources/resource-thumbnails-03.png"
              src2x="/img/pages/event-resources/resource-thumbnails-03@2x.png">
                <LogoAssetLink href="https://stuff.webmaker.org/teach.mozilla.org/MakerPartyBrandPalette.eps">
                  {this.context.intl.formatMessage({id: 'download_eps'})}
                </LogoAssetLink>
                <LogoAssetLink href="https://stuff.webmaker.org/teach.mozilla.org/MakerPartyBrandPalette.png">
                  {this.context.intl.formatMessage({id: 'download_png'})}
                </LogoAssetLink>
              </LogoAsset>
              <LogoAsset head={this.context.intl.formatMessage({id: 'poster'})}
              alt="Poster Image"
              src1x="/img/pages/event-resources/resource-thumbnails-07.png"
              src2x="/img/pages/event-resources/resource-thumbnails-07@2x.png">
                <LogoAssetLink href="https://stuff.webmaker.org/teach.mozilla.org/MakerPartyBanner.eps">
                  {this.context.intl.formatMessage({id: 'download_eps'})}
                </LogoAssetLink>
                <LogoAssetLink href="https://stuff.webmaker.org/teach.mozilla.org/MakerPartyBanner.png">
                  {this.context.intl.formatMessage({id: 'download_png'})}
                </LogoAssetLink>
              </LogoAsset>
              <LogoAsset head={this.context.intl.formatMessage({id: 'desktop_wallpaper'})}
              alt="Desktop Wallpaper Image"
              src1x="/img/pages/event-resources/resource-thumbnails-10.png"
              src2x="/img/pages/event-resources/resource-thumbnails-10@2x.png">
                <LogoAssetLink href="https://stuff.webmaker.org/teach.mozilla.org/MakerPartyWallpaper-1-320x480.jpg">
                  {this.context.intl.formatMessage({id: 'maker_party_size_1'})}
                </LogoAssetLink>
                <LogoAssetLink href="https://stuff.webmaker.org/teach.mozilla.org/MakerPartyWallpaper-1-640x1136.jpg">
                  {this.context.intl.formatMessage({id: 'maker_party_size_2'})}
                </LogoAssetLink>
                <LogoAssetLink href="https://stuff.webmaker.org/teach.mozilla.org/MakerPartyWallpaper-1-768x1280.jpg">
                  {this.context.intl.formatMessage({id: 'maker_party_size_3'})}
                </LogoAssetLink>
                <LogoAssetLink href="https://stuff.webmaker.org/teach.mozilla.org/MakerPartyWallpaper-1-1920x1200.jpg">
                  {this.context.intl.formatMessage({id: 'maker_party_size_4'})}
                </LogoAssetLink>
                <LogoAssetLink href="https://stuff.webmaker.org/teach.mozilla.org/MakerPartyWallpaper-1-2560x1440.jpg">
                  {this.context.intl.formatMessage({id: 'maker_party_size_5'})}
                </LogoAssetLink>
              </LogoAsset>
              <LogoAsset head={this.context.intl.formatMessage({id: 'certificate'})}
              alt="Certificate Image"
              src1x="/img/pages/event-resources/resource-thumbnails-08.png"
              src2x="/img/pages/event-resources/resource-thumbnails-08@2x.png">
                <RemixLink href="https://d157rqmxrxj6ey.cloudfront.net/mhasan/13029/ "/>
              </LogoAsset>
              <LogoAsset head={this.context.intl.formatMessage({id: 'table_cloth_design'})}
              alt="Table Cloth Design Image"
              src1x="/img/pages/event-resources/resource-thumbnails-04.png"
              src2x="/img/pages/event-resources/resource-thumbnails-04@2x.png">
                <LogoAssetLink href="https://stuff.webmaker.org/teach.mozilla.org/MakerPartyTableClothDesign.eps">
                  {this.context.intl.formatMessage({id: 'download_eps'})}
                </LogoAssetLink>
                <LogoAssetLink href="https://stuff.webmaker.org/teach.mozilla.org/MakerPartyTableClothDesign.png">
                  {this.context.intl.formatMessage({id: 'download_png'})}
                </LogoAssetLink>
              </LogoAsset>
              <LogoAsset head={this.context.intl.formatMessage({id: 'buttons'})}
              alt="Buttons Image"
              src1x="/img/pages/event-resources/resource-thumbnails-06.png"
              src2x="/img/pages/event-resources/resource-thumbnails-06@2x.png">
                <LogoAssetLink href="https://stuff.webmaker.org/teach.mozilla.org/MakerPartyButtons.eps">
                  {this.context.intl.formatMessage({id: 'download_eps'})}
                </LogoAssetLink>
                <LogoAssetLink href="https://stuff.webmaker.org/teach.mozilla.org/MakerPartyButtons.png">
                  {this.context.intl.formatMessage({id: 'download_png'})}
                </LogoAssetLink>
              </LogoAsset>
              <LogoAsset head={this.context.intl.formatMessage({id: 'paper_toy'})}
              alt="KUMI Papertoy Image"
              src1x="/img/pages/event-resources/resource-thumbnails-09.png"
              src2x="/img/pages/event-resources/resource-thumbnails-09@2x.png">
                <LogoAssetLink href="https://stuff.webmaker.org/teach.mozilla.org/KUMI-Papertoy-yellow.pdf">
                  {this.context.intl.formatMessage({id: 't_shirt_yellow'})}
                </LogoAssetLink>
                <LogoAssetLink href="https://stuff.webmaker.org/teach.mozilla.org/KUMI-Papertoy-blue.pdf">
                  {this.context.intl.formatMessage({id: 't_shirt_teal'})}
                </LogoAssetLink>
                <LogoAssetLink href="https://stuff.webmaker.org/teach.mozilla.org/KUMI-Papertoy-blank-tees.pdf">
                  {this.context.intl.formatMessage({id: 't_shirt_design'})}
                </LogoAssetLink>
              </LogoAsset>
            </div>
          </section>


          <div className="row full-row quote">
            <section>
              <div className="text-center">
                <p>
                  {this.context.intl.formatMessage({id: 'become_maker_party_partner'})}
                  <br/>
                  {this.context.intl.formatMessage({id: 'maker_party_partner_paragraph'})}
                </p>
                <a href="#" className="btn">
                  {this.context.intl.formatMessage({id: 'partner_with_us'})}
                </a>
              </div>
            </section>
          </div>

          <section>
            <IconLinks>
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

module.exports = EventsResources;
