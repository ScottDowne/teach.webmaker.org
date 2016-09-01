var React = require('react');
var EventDetail = require('./EventDetail.jsx');

module.exports = [
  {
    "head": "the_basics",
    "content": (
      <div>
        <EventDetail head="find_venue" body="tab_paragraph_1"/>
        <EventDetail head="prepare_equipment" body="tab_paragraph_2"/>
        <EventDetail head="gather_materials" body="tab_paragraph_3"/>
        <EventDetail head="make_some_gear" body="tab_paragraph_4"/>
        <EventDetail head="all_about_wifi" body="tab_paragraph_5"/>
      </div>
    )
  },
  {
    "head": "before_event",
    "content": (
      <div>
        <EventDetail head="recruit_mentors" body="tab_paragraph_6"/>
        <EventDetail head="promote_your_event" body="tab_paragraph_7"/>
        <EventDetail head="sign_up_learners" body="tab_paragraph_8"/>
        <EventDetail head="schedule" body="tab_paragraph_9"/>
        <EventDetail head="press" body="tab_paragraph_10"/>
      </div>
    )
  },
  {
    "head": "during_event",
    "content": (
      <div>
        <EventDetail head="design_fun_experience" body="tab_paragraph_11"/>
        <EventDetail head="set_up" body="tab_paragraph_12"/>
        <EventDetail head="activities" body="tab_paragraph_13"/>
        <EventDetail head="documentation" body="tab_paragraph_14"/>
        <EventDetail head="share_outs" body="tab_paragraph_15"/>
        <EventDetail head="wrap_up" body="tab_paragraph_16"/>
      </div>
    )
  },
  {
    "head": "after_event",
    "content": (
      <div>
        <EventDetail head="feedback" body="tab_paragraph_17"/>
        <EventDetail head="share_what_you_learned" body="tab_paragraph_18"/>
        <EventDetail head="thank_you" body="tab_paragraph_19"/>
      </div>
    )
  }
];
