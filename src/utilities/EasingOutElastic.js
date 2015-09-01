function easingCurve(oldValue, options){
    var i = 0,
    NewMin = options.newRangefrom || 0,
    NewMax = options.newRangeTo || 1,
    OldMin = options.from || 0,
    OldMax = options.to || 100,
    curve = options.curve || EasingOutElastic,
    NewValue = (((oldValue - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin)) + NewMin;

    return curve(NewValue)
    

}

function EasingOutElastic(t) {
            var s=1.70158;var p=0;var a=1.0;
            if (t===0) return 0.0;  if (t===1) return 1.0;  if (!p) p=.3;
            s = p/(2*Math.PI) * Math.asin(1.0/a);
            return a*Math.pow(2,-10*t) * Math.sin((t-s)*(2*Math.PI)/p) + 1.0;
}

module.exports = easingCurve;