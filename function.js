
console.time('code');

// Function definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {

    // function body
    console.log('\nBill is running\n');
    let total = billAmount + (billAmount * taxRate) + (billAmount * tipRate);
    return total;
}
// console.log(total);// scope issues


const fredBill = 1200;
const fredTax = 0.2;


const test = calculateBill(fredBill, fredTax);

console.log(test, 'test...');

// function call and storing in a variable
const myTotal = calculateBill(30, 1.4);
console.log(myTotal);





// always set a default value for your parameters to avoid wrong argument errors
function sayHi(params = '') {
    return `Hey ${params.toUpperCase()}`;
}


function doctorize(params = '') {
    return `Dr. ${params}`;
}

const result = doctorize();

console.log(result);


console.timeEnd('code');

  
function makeBaby(firstname, lastname) {
    const baby = {
        name : `${firstname} ${lastname}`,
        age : 0
    }

    console.log(baby);
    return baby;
}

makeBaby('fred', 'okereke');
// const makeBaby = firstname => ({ name : firstname, age: 0});   // not all codes should use fat Arrows


// IIFE
(function add(a,b) {
    console.log(a, b);
    return a+b;
    
})(2,5)


const person = {
    name: 'fred',
    age: 32,
    greet(){
        console.log(`your name is ${this.name} and you are ${this.age} years old`);
        
    },
    greet1: function () {
        console.log('i am greet 2');
        
    },

    greet2: () => {
        console.log(`i am greet 3`);
        
    }
}

person.greet();
person.greet1();
person.greet2();

