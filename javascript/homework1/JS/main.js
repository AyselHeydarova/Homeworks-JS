
let userName = prompt('Enter your name', 'Your name');

while (!isNaN(userName)) {
    userName = prompt('Enter correct name', `${userName}`);
}

let userAge =prompt('Enter your age', 'Your age');

while (isNaN(userAge)) {
    userAge = prompt('Enter correct age', `${userAge}`);
}

if (userAge< 18) {
    alert('You are not allowed to visit this website');
} else if (userAge>=18 && userAge<=22) {
    let wantToContinue = confirm('Are you sure you want to continue?');
    if (wantToContinue === true) {
        alert(`Welcome ${userName}`);
    } else {
        alert('You are not allowed to visit this website');
    }
} else {
    alert(`Welcome ${userName}`);
}

