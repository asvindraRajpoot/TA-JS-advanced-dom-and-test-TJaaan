

var moment = require('moment');
console.log( moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format('dddd'));
console.log(moment().format("MMM Do YY"));

let date1=moment('2020-01-01');
console.log(date1.isValid());
let date2=moment('2020-14-01');
console.log(date2.isValid());

// 
// - adds 7 days to current date
console.log(moment().add(7, 'days').calendar())

// - adds 7 months to current date
console.log(moment().add(7, 'months').calendar())

// - adds 7 years to current date
console.log(moment().add(7, 'years').calendar())


// - subtracts 7 days to current date
console.log(moment().subtract(7, 'days').calendar())

// - subtracts 7 months to current date
console.log(moment().subtract(7, 'months').calendar())
// - subtracts 7 years to current date
console.log(moment().subtract(7, 'years').calendar())

// - date1: `2014-11-11`
// - date2: `2015-09-11`
let d1=moment('2014-11-11');
let d2=moment('2015-09-11');
console.log(d2.diff(d1,'days'));


// - date1: `2014-11-27`
// - date2: `2015-09-16`

let d3=moment('2014-11-27');
let d4=moment('2015-09-16');
console.log(d4.diff(d3,'days'));


// - Check is `2020-01-01` date after `2018-01-01`
console.log(moment(`2020-01-01`).isAfter(`2018-01-01`))
// - Check is `2010-01-01` date after `2018-01-01`
console.log(moment(`2010-01-01`).isAfter(`2018-01-01`))
// - Check if the year `2019` is a leap year
console.log(moment(`2019`).isLeapYear());
// - Check if the year `2020` is a leap year
console.log(moment(`2020`).isLeapYear());


// for array 
const loadsh=require('lodash');
let ch=['a','c','d','e'];
let chunked=loadsh.chunk(ch,2);
console.log(chunked);
console.log(loadsh.difference([2,1],[2,3]));
// concat
var array = [1];
var other = loadsh.concat(array, 2, [3], [[4]]);
 
console.log(other);
// => [1, 2, 3, [4]]
 
console.log(array);
// => [1]

// find index
var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];
   
 console.log( loadsh.findIndex(users, function(o) { return o.user == 'barney'; }));
  // => 0

//   flatten
console.log(loadsh.flatten([1, [2, [3, [4]], 5]]));
// => [1, 2, [3, [4]], 5]


// collections
// countby
console.log(loadsh.countBy([6.1, 4.2, 6.3], Math.floor));
// => { '4': 1, '6': 2 }

// find
var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];
console.log(loadsh.find(users, function(o) { return o.age < 40; }));
// => object for 'barney')

// foreach
loadsh.forEach([1, 2], function(value) {
    console.log(value);
  });


//includes
console.log( loadsh.includes([1, 2, 3], 1));
// => true

// shuffel
console.log(loadsh.shuffle([1, 2, 3, 4]));
// => [4, 1, 3, 2])