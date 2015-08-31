var React = require('react');
var NavBtn = require('./NavBtn');

var App = React.createClass({
	handler: function(){
		console.log('this is an item')
	},
	render: function(){
		return (
			<div className="contained">
			<div className="panel-background">
			 <div className="item"><div className="flx"><NavBtn iconType="icon-android" textType="Android" /></div></div>
			 <div className="item"><div className="flx">hello</div></div>
			 <div className="item"><div className="flx">hello</div></div>
			 <div className="item"><div className="flx">hello</div></div>
			 <div className="item"><div className="flx">hello</div></div>
			 <div className="item"><div className="flx">hello</div></div>
			 <div className="item"><div className="flx">hello</div></div>
			 <div className="item"><div className="flx">hello</div></div>
			 </div>
			</div>
			);
	}
});

module.exports = App;