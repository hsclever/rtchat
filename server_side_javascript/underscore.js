var _ = require('underscore');

var arr = [3, 6, 9, 1, 12];

console.log("arr[0] : " + arr[0]);
console.log("_.first(arr) : " + _.first(arr));

console.log("arr[arr.length-1] : " + arr[arr.length-1]);
console.log("_.last(arr) : "+ _.last(arr));