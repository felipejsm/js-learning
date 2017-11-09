var point = {x:1,y:1};
console.log('******************** IN Operator ********************')
console.log('Existe propriedade X em point?');
console.log('x' in point);

console.log('******************** INSTANCEOF Operator ********************')
var newDate = new Date();
console.log('Is type of date?');
console.log(newDate instanceof Date);

console.log('******************** DELETE Operator ********************')
console.log('Existe propriedade X em point?');
delete point.x;
console.log('x' in point);

console.log('******************** hoist ********************')
var escopo = 'Global';
function hoist() {
    console.log('Escopo '+escopo);
    var escopo = 'Local';
    console.log('Escopo '+escopo);
}
hoist();