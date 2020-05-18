"use strict";
exports.__esModule = true;
var like_1 = require("./like");
var like = new like_1.Like(10, false);
function click() {
    like.count += (like.state) ? -1 : 1;
    like.state = !like.state;
}
click();
console.log("likes : " + like.count + " state: " + like.state);
