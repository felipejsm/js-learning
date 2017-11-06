// Criando um array, atribuindo seu valor a outro array
let primeiroArray = ["UM","DOIS","TRES"];
let segundoArray  = primeiroArray;


// Alterando valor do 2º array
segundoArray[1] = "QUATRO";


//Valor do array original é alterado
console.log("******************** Cópia por Referência ********************")
console.log('Primeiro: '+primeiroArray);
console.log('Segundo:  '+segundoArray);
console.log('São iguais? '+ (primeiroArray === segundoArray));
//alert(primeiroArray === segundoArray);

//Isso acontece porque o valor é passado por referência e não por valor(C-like?)

segundoArray = primeiroArray.slice(0);

segundoArray[1] = "CINCO";

console.log("******************** Cópia por Valor ********************")
console.log('Primeiro: '+primeiroArray);
console.log('Segundo:  '+segundoArray);
console.log('São iguais? '+ (primeiroArray === segundoArray));

