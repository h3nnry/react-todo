function add (a, b) {
    return a + b;
}

console.log(add(3, 1));

var toAdd = [9, 5];
console.log(add(...toAdd));

var groupA = ['Sonya', 'Ann'];
var groupB = ['Antonio', 'Dima'];
var final = [...groupB, 3, ...groupA];

console.log(final);

var person = ['John', 31];
var personTwo = ['Helen', 24];
function showAge(name, age) {
    console.log("Hi " + name + ", you are " + age);
}
showAge(...person);

var names = ['Frank', 'Lisa'];
var final = ['Kim', ...names];
 for(var i=0; i<final.length; i++) {
     console.log(final[i]);
}