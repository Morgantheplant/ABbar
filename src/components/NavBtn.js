var React = require('react');

var NavBtn= React.createClass({
	handleClick: function(){
		console.log('clicked')
	},
	render: function(){
		return (
			<div className="nav-btn" onClick={this.handleClick}>
			    <i className={this.props.iconType}></i>
			    <div className="nav-btn-vert-line"></div>
			    <div id="nav-btn-type-text">{this.props.textType}</div>
			</div>
			);
	}
});

module.exports = NavBtn;