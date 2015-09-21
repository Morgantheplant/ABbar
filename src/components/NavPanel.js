var React = require('react');
var NavBtn = require('./NavBtn');
var EasingOutElastic = require('../utilities/EasingOutElastic');

var NavPanel= React.createClass({
    getInitialState: function(){
        return {
      	    sliderInitialLocation: 300,
      	    sliderEndLocation:0
        };
    },
    componentDidMount: function(){
       var navSlider = React.findDOMNode(this.refs.navContainer);
       navSlider.scrollLeft = 300;
       this.startScrollAnimation(navSlider);
    },
    createNavItem: function(iconData, index){
          return <NavBtn key={ iconData+index } iconType={ iconData.iconType } textType={ iconData.iconText } iconColor={ iconData.itemColor } />
    },
    startScrollAnimation: function(navSlider){
    // duration: (250 - 150) * 20ms = 2 seconds
        var countdown = 250;
        var timer = setTimeout(function loop(){
            if(countdown<=150) {
                clearTimeout(timer);
            }
            if(countdown>150) {
                var newVal = EasingOutElastic(countdown, {to:150, from:250})
         	    // dampen easing effect
         	    navSlider.scrollLeft = Math.floor(300 - (newVal * 200));
             	countdown--;
         	    setTimeout(loop, 20);
            }
       }, 500);
    },
    render: function(){
        return (
	    <div className="nav-container" ref="navContainer">
			 <div className="nav-panel">
			 { this.props.iconData.map(this.createNavItem) }
			 </div>
		</div>
		);
	}
});

module.exports = NavPanel;
