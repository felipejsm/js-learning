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

let primeiroArrayDeArrays = [
        ['Goku', 'Gohan', 'Vegita', 'Trunks', 'Future-Trunks'],
        ['Yamcha','Kuririn','Yajirobe','Tenshinran','Mestre Kame'],
        ['Piccolo','Kami Sama','Dende','Senhor Popo'],
]

let segundoArrayDeArrays = primeiroArrayDeArrays.concat();// pode ser usado no lugar de Slice()
// O método concat() retorna um novo array contendo todos os arrays ou valores passados como parâmetro
// FONTE: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

//'Yamcha'
segundoArrayDeArrays[1][0] = 'Mr. Satan';

console.log("******************** Cópia por Ref Array de Arrays ********************")
console.log('Primeiro: '+primeiroArrayDeArrays[1]);
console.log('Segundo: '+segundoArrayDeArrays[1]);

//Para a cópia por referência surtir efeito, usa-se um laço for
let primeiroArrayDeArrays2 = [
        ['Goku', 'Gohan', 'Vegita', 'Trunks', 'Future-Trunks'],
        ['Yamcha','Kuririn','Yajirobe','Tenshinran','Mestre Kame'],
        ['Piccolo','Kami Sama','Dende','Senhor Popo'],
];
let segundoArrayDeArraysVazio = [];

for(let index = 0, len = primeiroArrayDeArrays.length; index < len; index++) {
        segundoArrayDeArraysVazio[index] = primeiroArrayDeArrays[index].slice();
}
// Trocando Gohan por Pan 
segundoArrayDeArraysVazio[0][1] = 'Pan';

console.log("******************** Cópia por Valor Array de Arrays ********************")
console.log('Primeiro: '+primeiroArrayDeArrays[0]);
console.log('Segundo: '+segundoArrayDeArraysVazio[0]);
