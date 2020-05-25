
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
