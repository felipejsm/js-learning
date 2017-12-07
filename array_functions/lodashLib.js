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
function callMe() {
    console.log("Start you're engines, gentleman: ");
    var result = _(data)
    .groupBy(x => x.unidadeEnsino)
    .value();
    console.log("Over");
}
callMe();