//function  sum(numberA, numberB) {
//    var result = numberA + numberB;
//    return result;
//    console.log("Tu resulato es" + result);
//}

var handleinputchange = (event) => {
    alert(event.target.value);
}
document.getElementById("buttonleft").addEventListener("change", handleinputchange);


var sum = (numberA, numberB) => numberA + numberB
console.log(sum)


