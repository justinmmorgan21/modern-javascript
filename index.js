const moment = require('moment');
import {sqrt} from 'mathjs';

console.log("Hello from js");

var datetime = moment().startOf("day").fromNow();
console.log(datetime);
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

console.log(sqrt(-4).toString()) // 2i

const evens = [2, 4, 6, 8, 10, 12, 14];
const fives = [];
// Expression bodies
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);
console.log(odds);
console.log(nums);

// Statement bodies
nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});
console.log(fives);

// Lexical this
var bob = {
  _name: "Bob",
  _friends: [],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
};
bob._friends.push("Jimmy");
bob._friends.push("Doug");
bob._friends.push("Biff");
bob.printFriends();

// Lexical arguments
function square() {
  let example = () => {
    let numbers = [];
    for (let number of arguments) {
      numbers.push(number * number);
    }

    return numbers;
  };

  return example();
}

console.log(square(2, 4, 7.5, 8, 11.5, 21)); // returns: [4, 16, 56.25, 64, 132.25, 441]