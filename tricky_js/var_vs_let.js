function start() {
    for(var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i); // i is accessible here because it is defined using var keyword
}

start();

// var => function-scoped
// ES6 (ES2015): let, const => block-scoped

var color = "red"; // attached to window object
let age = 30; // not attached to window object

// attached to window object
function sayHi() {
    console.log("hi");
}

/* using modules we can prevent variables and functions from getting attached to window object */

