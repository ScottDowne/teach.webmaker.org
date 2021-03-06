// [THIS LINE TO BE REMOVED] bootstrap class reference: http://nakupanda.github.io/bootstrap3-dialog/

var React = require('react');
var ReactAddons = require('react/addons');

var Modal = React.createClass({
  mixins: [ReactAddons.PureRenderMixin],
  handleClick: function(e) {
    if (e.target === this.getDOMNode().querySelector("button.close")) {
      this.props.onClose();
    }
  },
  render: function() {
    return (
      <div className="modal show">
        <div className="modal-backdrop"></div>
        <div className="modal-dialog" onClick={this.handleClick}>
          <div className="modal-header">
            <button type="button" className="close" aria-hidden="true">x</button>
            <div className="modal-title">{this.props.modalTitle}</div>
          </div>
          <div className="modal-body">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Modal;
