//INPUTS
var numberA = () => parseInt(document.getElementById(input-number1).value);
var numberB = () => parseInt(document.getElementById(input-number2).value);

//FUNCIONES DE LAS OPERACIONES
var sum = (numberA, numberB) => numberA() + numberB();

var rest = (numberA, numberB) => numberA() - numberB();

var multiply = (numberA, numberB) => numberA() * numberB();

var dividy = (numberA, numberB) => numberA() / numberB();

//RESULTADOS
var showresultsum = () => document.getElementById("result").innerText = sum();

var showresultrest = () => document.getElementById("result").innerText = rest();

var showresultmultiply = () => document.getElementById("result").innerText = multiply();

var showresultdividy = () => document.getElementById("result").innerText = dividy();

//EVENTOS
var handleinputchange = (event) => {
    document.getElementById("number1").addEventListener("click", handleinputchange);
}

var handleinputchange = (event) => {
    document.getElementById("number2").addEventListener("click", handleinputchange);
}

var handleButtonClick = () => {
    document.getElementById("sum").addEventListener("click", handleButtonClick);
}

var handleButtonClick = () => {
    document.getElementById("rest").addEventListener("click", handleButtonClick);
}

var handleButtonClick = () => {
    document.getElementById("multiply").addEventListener("click", handleButtonClick);
}

var handleButtonClick = () => {
    document.getElementById("dividy").addEventListener("click", handleButtonClick);
}