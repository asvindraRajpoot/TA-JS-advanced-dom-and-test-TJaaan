function add(a,b) {
  return `${a} ${b}`
}

function subtract(a,b) {
  return a-b;
}

function sum(a,b) {
  return a+b;
}

function multiply(a,b) {
  return a*b;
}

function power(a,b) {
  return Math.pow(a,b);
}

function factorial(n) {
  var ans=1;
              
  for (var i = 2; i <= n; i++)
      ans = ans * i;
  return ans;
 
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
