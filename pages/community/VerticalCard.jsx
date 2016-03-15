var React = require('react');
var Illustration = require('../../components/illustration.jsx');

var VerticalCard = React.createClass({
  render: function() {
    return (
      <Illustration
        height={259} width={460}
        src1x={this.props.imgSrc1x}
        src2x={this.props.imgSrc2x}
        className="vertical-layout"
        alt="">
        <h2>{this.props.header}</h2>
        <p>{this.props.description}</p>
        <a href={this.props.linkUrl}>{this.props.linkText}</a>
      </Illustration>
    );
  }
});

module.exports = VerticalCard;
