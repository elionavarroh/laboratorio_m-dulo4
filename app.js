//INPUTS
var numberA = () => parseInt(document.getElementById("input-number1").value);
var numberB = () => parseInt(document.getElementById("input-number2").value);

//FUNCIONES DE LAS OPERACIONES
var sum = () => numberA() + numberB();

var rest = () => numberA() - numberB();

var multiply = () => numberA() * numberB();

var dividy = () => numberA() / numberB();

//RESULTADOS
var showresultsum = () => document.getElementById("result").innerText = sum();

var showresultrest = () => document.getElementById("result").innerText = rest();

var showresultmultiply = () => document.getElementById("result").innerText = multiply();

var showresultdividy = () => document.getElementById("result").innerText = dividy();

//EVENTOS

document.getElementById("sum").addEventListener("click", showresultsum);

document.getElementById("rest").addEventListener("click", showresultrest);

document.getElementById("multiply").addEventListener("click", showresultmultiply);

document.getElementById("dividy").addEventListener("click", showresultdividy);


//PARTE EXTRA - SI ALGUNO DE LOS OPERADORES ES VACÍO, MUESTRA COMO RESULTADO "ERROR"
//if (numberA >=0 && numberB >= 0) {
//    document.getElementById("sum").innerText;
//} else { 
//    showresultsum();
//}