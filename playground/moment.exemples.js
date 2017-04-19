var moment = require('moment');

console.log(moment().format());

var now = moment();
console.log('Current timestamp', now.unix());

var timestamp = 1492637203;
var currentTime = moment.unix(timestamp);
console.log(currentTime.format('MMM D, YY @ h:mm a'));
console.log(currentTime.format('MMM Do, YYY @ h:mm A'));