var React = require('react');

var NavBtn= React.createClass({
	handleClick: function(){
		console.log('clicked')
	},
	render: function(){
        var color = this.props.iconColor;
        var navBtnStyle = { border: '1px solid '+ color, color:color };

		return (
			<div className="nav-item">
			    <div className="nav-btn-containter" onClick={this.handleClick} >
			        <i className={this.props.iconType + " nav-btn-icon"} style={ navBtnStyle }></i>
			        <div className="nav-btn-vert-line"></div>
			        <div id="nav-btn-type-text">{this.props.textType}</div>
			    </div>
			</div>
			);
	}
});

module.exports = NavBtn;