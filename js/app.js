const userInput = document.querySelector('input');

const btn = document.querySelector('button');

const output = document.querySelector('h1');


function inputCheck() {

    if (userInput.value == '') {

        alert('Inserire una parola');
        return;

    }

    let currentInput = userInput.value.toLowerCase();

    let reversedInput = currentInput.split('').reverse().join('');

    if (currentInput == reversedInput) {

        output.innerText = 'Parola palindroma';

    } else {
        output.innerText = 'Parola non palindroma';
    }

    //console.log(currentInput, reversedInput);

}

btn.addEventListener('click', inputCheck);