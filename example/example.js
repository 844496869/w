var w = require('wade-w');
var originalArray = [1, 2, 3];

var cloneArray = w.clone(originalArray);

cloneArray = [1, 2, 4];

console.log("Original Array is: " + originalArray);

console.log("Clone Array is: " + cloneArray);