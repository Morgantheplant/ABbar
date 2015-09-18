var React = require('react');
var NavPanel = require('./NavPanel');
var iconData = require('../constants/iconData');

var App = React.createClass({
	render: function(){

		return (
			  <NavPanel iconData={ iconData } />
			)
	}
});

module.exports = App;
