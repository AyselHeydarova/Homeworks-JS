
let number1 = parseInt(prompt('Enter a number'));

while (isNaN(number1) || number1===null) {
    number1 = prompt('Enter correct number', `${number1}`);
}


let number2 = parseInt(prompt('Enter second number'));

while (isNaN(number2) || number2===null) {
    number2 = prompt('Enter correct second number', `${number2}`);
}


const Operations = {
    '+': 'addition',
    '-': 'subtract',
    '/': 'division',
    '*': 'multiplication',
};

let operation = prompt('Enter an operation');

while (!Operations[operation]) {
    operation = prompt('Enter correct operation', `${operation}`);
}



function basicCalc(number1, number2, operation) {

    let result;
    if (operation === '+'){
        result = number1 + number2;
    }

    else if (operation === '-'){
       result = number1 - number2;
    }

    else if (operation === '*'){
        result = number1 * number2;
    }

    else {
        result = number1 / number2;
    }
    return result;
}

console.log(basicCalc(number1, number2, operation));



