
console.log(`My name is ${firstname('fred')} and my last name is ${lastName('okereke')}`);


// this function is hoisted
function firstname(params) {
    return params;
}

// this is not hoisted

const lastName = function lastName(params) {
    return params;
}
