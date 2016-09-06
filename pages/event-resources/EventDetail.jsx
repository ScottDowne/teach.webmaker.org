var React = require('react');

import { FormattedHTMLMessage } from 'react-intl';

var EventDetail = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    return (
      <div>
        <div className="event-detail-head col-sm-3 col-md-3 col-lg-3">{this.context.intl.formatMessage({id: this.props.head})}</div>
        <div className="event-detail-content col-sm-9 col-md-9 col-lg-9">
          <FormattedHTMLMessage
            id={this.props.body}
          />
        </div>
      </div>
    );
  }
});

module.exports = EventDetail;
