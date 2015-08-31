var React = require('react');
var NavBtn = require('./NavBtn');

var NavPanel= React.createClass({
	render: function(){
        var createNavItem = function(iconData, index){
          return <NavBtn key={ iconData+index } iconType={ iconData.iconType } textType={ iconData.iconText } iconColor={ iconData.itemColor } />
        }

		return (
			<div className="nav-panel">
			  { this.props.iconData.map(createNavItem) }
			</div>
			);
	}
});

module.exports = NavPanel;