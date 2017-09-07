// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.



window.onload = function() {
var R = Raphael("canvas", 500, 500);    
var c = R.circle(100, 100, 50).attr({
    fill: "hsb(.8, 1, 1)",
    stroke: "none",
    opacity: .5
});
var start = function () {
    // storing original coordinates
    this.ox = this.attr("cx");
    this.oy = this.attr("cy");
    this.attr({opacity: 1});
},
move = function (dx, dy) {
    // move will be called with dx and dy
    this.attr({cx: this.ox + dx, cy: this.oy + dy});
},
up = function () {
    // restoring state
    this.attr({opacity: .5});
};
c.drag(move, start, up);    
};