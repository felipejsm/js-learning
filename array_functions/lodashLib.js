let todosOsNiveis = [];
let data = [
    {quantidadeMatriculados: 2, unidadeEnsino: 1, ano: 2017, periodo: 0, tipo: "EF",nome: "Ensino Médio"},
    {quantidadeMatriculados: 2, unidadeEnsino: 2, ano: 2017, periodo: 1, tipo: "MBA",nome: "ARQUITETURA"},
    {quantidadeMatriculados: 24, unidadeEnsino: 2, ano: 2014, periodo: 0, tipo: "SUP",nome: "Pedagogia | Por Crédito Presencial"},
    {quantidadeMatriculados: 168, unidadeEnsino: 2, ano: 2017, periodo: 1, tipo: "SUP",nome: "Administração | Seriado"},
    {quantidadeMatriculados: 99, unidadeEnsino: 2, ano: 2017, periodo: 1, tipo: "SUP",nome: "MESTRADO EM COMUNICAÇÃO"},
    {quantidadeMatriculados: 139, unidadeEnsino: 2, ano: 2017, periodo: 1, tipo: "SUP",nome: "MBA EM MARKETING"},
    {quantidadeMatriculados: 150, unidadeEnsino: 2, ano: 2017, periodo: 1, tipo: "SUP",nome: "Inglês - Básico"},
    {quantidadeMatriculados: 1, unidadeEnsino: 3, ano: 2017, periodo: 1, tipo: "MESTRADO",nome: "US MAMA"},
    {quantidadeMatriculados: 3, unidadeEnsino: 4, ano: 2017, periodo: 1, tipo: "SUP",nome: "Espanhol - Básico"},
    {quantidadeMatriculados: 1, unidadeEnsino: 4, ano: 2017, periodo: 1, tipo: "SUP",nome: "Ensino Fundamental"},
    {quantidadeMatriculados: 10, unidadeEnsino: 5, ano: 2016, periodo: 1, tipo: "SUP",nome: "Engenharia Elétrica"},
    {quantidadeMatriculados: 3, unidadeEnsino: 20, ano: 2017, periodo: 0, tipo: "TEC",nome: "Publicidade e Propaganda"}
];
let unidadeEnsinoIds = [1,2,3,4,5,20];
let nivel2 = [];
let nivel3 = [];
function callMe() {
    console.log("Start you're engines, gentleman: ");
    var result = _(data)
    .groupBy(x => x.unidadeEnsino)
    .value();
    console.log("Over");
}
const groupByTipo = (data, unidadeEnsinoIds) => {
    for(let index = 0, len = unidadeEnsinoIds.length; index < len; index++) {
        let pos = unidadeEnsinoIds[index];
        nivel2.push({'unidadeEnsino': pos, 'nivel2': _.chain(data)
        .filter(filter_by => filter_by.unidadeEnsino == pos)
        .groupBy(x => x.tipo)
        .map((objs, key) => ({
          'tipo': key,
          'quantidadeMatriculados': _.sumBy(objs, 'quantidadeMatriculados') }))
        .value()});
    }
    console.log(nivel2);
};
const groupByNome = (data, unidadeEnsinoIds) => {
    let pos = unidadeEnsinoIds[1];
    let tipo = "SUP";
    nivel3.push({'unidadeEnsino': pos, 'tipo': tipo ,'nivel3': _.chain(data)
    .filter(filter_by => filter_by.unidadeEnsino == pos)
    .filter(filter_by => filter_by.tipo == tipo)
    .groupBy(x => x.nome)
    .map((objs, key) => ({
        'nome': key,
        'quantidadeMatriculados': _.sumBy(objs, 'quantidadeMatriculados') }))
    .value()});
    console.log(nivel3);
};
function callMe2() {
    var result = _(data)
    .groupBy(x => x.tipo)
    .map((objs, key) => ({
        'tipo': key,
        'quantidadeMatriculados': _.sumBy(objs, 'quantidadeMatriculados') }))
    .value();
   
    console.log(result);
}/*
callMe2();
groupByTipo(data,unidadeEnsinoIds);*/
groupByNome(data,unidadeEnsinoIds);