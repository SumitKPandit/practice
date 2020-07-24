// console.log(squareNum(8));

// Funciton declaration
// function squareNum(num) {
//     return num * num;
// }

function timeFn(fn) {
    console.time('fn');
    fn();
    console.timeEnd('fn');
}

timeFn(function() {
    for(let i = 0; i < 100000; i++) {}
});

// Function expression
// const squareNum = function(num) {
//     return num * num;
// }

// IIFE Immediately Invoked Function Expression
const twoSquared = (
    function(num) {
        return num * num;
    }
)(2);

console.log(twoSquared);

const calc = (
    function() {
        function add(a, b) {
            return a + b;
        }
        function multiply(a, b) {
            return a * b ;
        }
        return {
            add: add,
            multiply: multiply
        };
    }
)();

console.log(calc.add(2, 10));

function fibFactory(num) {
    return (function fib(n) {
        if(n < 2) {
            return n;
        }
        return fib(n - 1) + fib(n - 2);
    })(num);
}

const tenthFib = fibFactory(10);
const fifteenthFib = fibFactory(15);
const twentiethFib = fibFactory(20);

console.log(tenthFib, fifteenthFib, twentiethFib);

const squareNum = num => num * num;

console.log(squareNum(8));