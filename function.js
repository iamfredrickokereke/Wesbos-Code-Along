
// // Function definition
// function calculateBill(billAmount, taxRate) {
//     let total = billAmount * (1 + taxRate);
//     console.log('Calculate is running');
//     return total;
// }


// const fredBill = 1200;
// const fredTax = 0.2;


// const test = calculateBill(fredBill, fredTax);

// console.log(test, 'test...');

// // function call and storing in a variable
// const myTotal = calculateBill(30, 1.4);
// console.log(myTotal);




// // console.log(total);// scope issues





function sayHi(params) {
    return `Hey ${params.toUpperCase()}`;
}


function yell(params) {
    return `Dr. ${params}`;
}

const test = yell('fred');

console.log(test);
