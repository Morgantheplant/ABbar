var React = require('react');
var NavPanel = require('./NavPanel');
var iconData = require('../constants/iconData');

var App = React.createClass({
	handler: function(){
		console.log('this is an item')
	},
	render: function(){
		console.log(iconData)

		return (
			  <NavPanel iconData={ iconData } />
			)
	}
});

module.exports = App;