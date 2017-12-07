let nivel1 = [];// var que armazenará os valores do primeito nível
var arrayOfArray = []; //-> planejo que esse array armazene os outros arrays que serão gerados dinamicamente

let todosOsNiveis = [];

let data = [
    {quantidadeMatriculados: 2, unidadeEnsino: 1, ano: 2017, periodo: 0, tipo: "EF"},
    {quantidadeMatriculados: 2, unidadeEnsino: 2, ano: 2017, periodo: 1, tipo: "MBA"},
    {quantidadeMatriculados: 24, unidadeEnsino: 2, ano: 2014, periodo: 0, tipo: "SUP"},
    {quantidadeMatriculados: 168, unidadeEnsino: 2, ano: 2017, periodo: 1, tipo: "SUP"},
    {quantidadeMatriculados: 99, unidadeEnsino: 2, ano: 2017, periodo: 1, tipo: "SUP"},
    {quantidadeMatriculados: 139, unidadeEnsino: 2, ano: 2017, periodo: 1, tipo: "SUP"},
    {quantidadeMatriculados: 150, unidadeEnsino: 2, ano: 2017, periodo: 1, tipo: "SUP"},
    {quantidadeMatriculados: 1, unidadeEnsino: 3, ano: 2017, periodo: 1, tipo: "MESTRADO"},
    {quantidadeMatriculados: 3, unidadeEnsino: 4, ano: 2017, periodo: 1, tipo: "SUP"},
    {quantidadeMatriculados: 1, unidadeEnsino: 4, ano: 2017, periodo: 1, tipo: "SUP"},
    {quantidadeMatriculados: 10, unidadeEnsino: 5, ano: 2016, periodo: 1, tipo: "SUP"},
    {quantidadeMatriculados: 3, unidadeEnsino: 20, ano: 2017, periodo: 0, tipo: "TEC"}
]; // -> exemplo de como os dados virão
let tmpArr = [];
function callMe() {
    console.log("Start you're engines, gentleman: ");
    data.reduce(function(valorAnterior, valorAtual, indice, array) {
        tmpArr.push(angular.copy(array[indice-1]));//tmpArr = [{quantidadeMatriculados: 24, unidadeEnsino: 2, ano: 2014, periodo: 0, tipo: "SUP"}]
        if(indice-1 === 0) { //me certifico que é o primeiro loop
            todosOsNiveis.push(angular.copy(tmpArr));// todosOsNiveis = [{tmpArr : [{quantidadeMatriculados: 24, unidadeEnsino: 2, ano: 2014, periodo: 0, tipo: "SUP"}]}]
        } else {
            agrupaPorUnidade(todosOsNiveis,tmpArr);
        }
        tmpArr.splice(0);
    });
    console.log("Over");
}
function agrupaPorUnidade(todosOsNiveis,tmpArr) {
    let adicionaNoPai = false;
    let adicionaNoFilho = false;
    let arrAux = [];
    //findIndex
    let teste = todosOsNiveis.findIndex( item => item.unidadeEnsino === tmpArr[0].unidadeEnsino);
    console.log(teste);
    for (let indexPai = 0, lenPai = todosOsNiveis.length; indexPai < lenPai; indexPai++) {
        for (let indexFilho = 0, lenFilho = todosOsNiveis[indexPai].length; indexFilho < lenFilho; indexFilho++) {
            teste = todosOsNiveis.findIndex( item => item.unidadeEnsino === tmpArr[0].unidadeEnsino);
            console.log(teste);
            if(!adicionaNoFilho && todosOsNiveis[indexPai][indexFilho].unidadeEnsino === tmpArr[0].unidadeEnsino) {
                todosOsNiveis[indexPai].push(angular.copy(tmpArr[0]));
                adicionaNoFilho = true;
                break;
            } else {
                adicionaNoPai = true;
                break;
            }
        }
        if(adicionaNoPai) {
            arrAux.push(angular.copy(tmpArr[0]));
            todosOsNiveis.push(angular.copy(arrAux));
            adicionaNoPai = false;
            break;
        }
    }
}
callMe();
/*
    angular.forEach(todosOsNiveis, function(pai) {// 1º nível: cada linha representa uma unidade
        angular.forEach(pai, function(filho) {// 2º nível: itens de cada unidades
            if(!adicionaNoFilho && filho.unidadeEnsino === tmpArr[0].unidadeEnsino) {
                //filho.push(angular.copy(tmpArr[0]));
                adicionaNoPai = true;
                adicionaNoFilho = true;
            }
        });
        if(adicionaNoPai) {
            pai.push(angular.copy(tmpArr[0]));
            adicionaNoPai = false;
        }
    });*/

/*
function mesmaUnidadeEnsino(arrayOfArray, arrayResponse) {
    for(let index = 0, len = arrayOfArray.length; index < len; index++) {
        arrayOfArray[index].unidadeEnsino === arrayResponse.unidadeEnsino;
        
    }
    angular.forEach(arrayOfArray, function(arr) {
        if(arr.unidadeEnsino === arrayResponse.unidadeEnsino) {

        }
    });
}
arrayOfArray.forEach




// Algoritmo
/*
Iterar sobre o array
cada item, verificar se o valor do campo unidadeEnsino existe em algum outro array
Se existe 
    dá um push
Se não
    cria um novo array e dá push

Criar um novo array para cada unidadeEnsino diferente encontrado
Mas e se for igual?
Aliás, como faço para saber que são iguais?
*/