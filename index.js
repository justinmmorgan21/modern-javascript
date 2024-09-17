const moment = require('moment');
import {sqrt} from 'mathjs';

console.log("Hello from js");

var datetime = moment().startOf("day").fromNow();
console.log(datetime);
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

console.log(sqrt(-4).toString()) // 2i
