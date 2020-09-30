
exports.min = function min (array) {
    if (array === undefined || array.length === 0 ) return 0;
    let min = array[0];
    array.forEach( elem => {
        if (elem < min) min = elem;
    });
    return min;
}

exports.max = function max (array) {
    if (array === undefined || array.length === 0 ) return 0;
    let max = 0;
    array.forEach( elem => {
        if (elem > max) max = elem;
    });
    return max;
}

exports.avg = function avg (array) {
    if (array === undefined || array.length === 0 ) return 0;
    let sum = 0;
    array.forEach( elem => {
        sum += elem;
    });
    return sum/array.length;
}
