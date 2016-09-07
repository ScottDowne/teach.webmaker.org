var React = require('react');

var Tabulator = React.createClass({
  getInitialState: function() {
    return {
      activeClass: "tab-0"
    };
  },
  contextTypes: {
    intl: React.PropTypes.object
  },
  propTypes: {
    tabs: React.PropTypes.array
  },
  showTab: function(activeTab) {
    this.setState({
      activeClass: activeTab
    });
  },
  render: function() {
    var self = this;
    var className = "tabulator";
    var formatMessage = this.context.intl.formatMessage;

    if (this.state.activeClass) {
      className += " " + this.state.activeClass;
    }

    return (
      <div className={className}>
        <div className="tabulator-head-container">
          {this.props.tabs.map(function (section, key) {
            function onClick(e) {
              self.showTab("tab-" + key);
            }

            var innerClassName = "tabulator-head col-xs-3 col-sm-3 col-md-3 col-lg-3";

            innerClassName += " tab-" + key;

            return (
              <div onClick={onClick} className={innerClassName} key={key}>
                {formatMessage({id: section.head})}
              </div>
            );
          })}
        </div>

        {this.props.tabs.map(function (section, idx) {
          var key = "tab-"+idx;
          var innerClassName = "tabulator-content-container " + key;
          
          return (
            <div key={key}>
              <div className="tabulator-head-no-js">
                {formatMessage({id: section.head})}
              </div>
              <div className={innerClassName}>
                <div className="tabulator-content">
                  {section.content}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
});

module.exports = Tabulator;
