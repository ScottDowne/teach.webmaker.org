var React = require('react');

var RemixLink = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    return (
      <a className="remix-link" href={this.props.href}>{this.context.intl.formatMessage({id: 'remix'})}</a>
    );
  }
});

module.exports = RemixLink;
