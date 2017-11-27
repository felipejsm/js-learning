console.log('************* Using let over var ************');

console.log('************* Hoisting ************');

oddsums(13);

function oddsums(n) {
    let total = 0, result = [];
    for(let x = 1; x <= n; x++) {
        let odd = 2 * x - 1;
        total += odd;
        result.push(total);
    }
    return result;
}