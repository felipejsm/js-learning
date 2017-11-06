var primeiroArray = ["UM","DOIS","TRES"];
var segundoArray  = primeiroArray;

segundoArray[1] = "QUATRO";

console.log('Primeiro: '+primeiroArray);
console.log('Segundo: '+segundoArray);
console.log('São iguais? '+ (primeiroArray === segundoArray));
alert(primeiroArray === segundoArray);