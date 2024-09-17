const moment = require('moment');
console.log("Hello from js");

var datetime = moment().startOf("day").fromNow();
console.log(datetime);
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));