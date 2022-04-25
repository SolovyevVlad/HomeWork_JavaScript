function checkInput(input) {
    if (typeof(input) === 'string') {
        if (input.trim().length != 0) {
            console.log('Well! This is the String.\nWell! The String is not empty.');
            checkLegnth(input);
            checkLetters(input);
            checkUpLetter(input);
            checkNumber(input);
            checkAt(input);
        } else 
            console.log('Error! This is the String.\nBut it`s empty.');
    } else 
        console.log('Error! This is not the String.');

}

function checkLegnth(input){
    const length = input.length >= 5 && input.length <=64;
    if (length) {
        console.log('Well! Length of the string is in the range 5-64');
    } else 
    console.log('Error! Length of the string is not in the range 5-64');
}

function checkLetters(input){
    const letters = /[a-zа-яё]/.test(input);
    if (letters) {
        console.log('Well! There are letters in the string');
    } else 
    console.log('Error! There are not letters in the string');
}

function checkUpLetter(input){
    const letterUpper = /[A-ZА-ЯЁ]/.test(input);
    if (letterUpper) {
        console.log('Well! There is upper letter in the string');
    } else 
    console.log('Error! There is not upper letter in the string');
}

function checkNumber(input){
    const number = /[0-9]/.test(input);
    if (number) {
        console.log('Well! There is number in the string');
    } else 
    console.log('Error! There is not number in the string');
}

function checkAt(input){
    const at = /@/.test(input);
    if (at) {
        console.log('Well! There is @ in the string');
    } else 
    console.log('Error! There is not @ in the string');
}

checkInput('asd123ASD@')