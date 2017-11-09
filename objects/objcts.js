console.log('******************** Object Literals ******************')
var vazio = {};
var point = {x:0 , y:0};
var point2 = {x: point.x, y : point.y};
var band = {
    'name': 'Darkest Hour',
    'genre': 'Melodic Death Metal/Metalcore',
    numbers : {
        albums : 9,
        members: 5
    }
};

console.log('******************** Object new ******************')
var obj = new Object();// herda Object.prototype
var arr = new Array();// herda Array.prototype
var dt  = new Date();
var reg = new RegExp();

