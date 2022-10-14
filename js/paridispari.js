
const pari = document.querySelector('#pari');
const dispari = document.querySelector('#dispari');

const all = [pari, dispari];

const inputNumber = document.querySelector('#number');
const btn = document.querySelector('button');

const yourNumber = document.getElementById('yournumber');
const hostOutput = document.getElementById('hostNumber');
const result = document.getElementById('result');


let userInput;
let hostNumber;

let sum = 0;

function getInfo() {

    userInput = parseInt(inputNumber.value);
    if (userInput > 5) {
        alert('numeri da 1 a 5');
        inputNumber.value = '';
        userInput = '';
        return
    }

    generateHostNumber();
    verify();

    //console.log(userInput);
    yourNumber.innerHTML = userInput;
    //console.log(hostNumber);
    hostOutput.innerHTML = hostNumber;
    //console.log(sum);

    reset();

}



function generateHostNumber() {

    hostNumber = Math.floor(Math.random() * (6 - 1) + 1)
}



function verify() {

    sum = userInput + hostNumber;

    if (pari.checked && sum % 2 == 0) {

        result.innerHTML = 'Hai vinto';


    } else if (dispari.checked && sum % 2 != 0) {

        result.innerHTML = 'Hai vinto';

    } else {

        result.innerHTML = 'Hai perso';

    }

}


function reset() {

    inputNumber.value = '';
    dispari.checked = false;
    pari.checked = false;

}


btn.addEventListener('click', getInfo);
