Array.prototype.myMap = function(callback) {
    let arrLength = this.length;

    let arrNew = [];

    for (let i = 0; i < arrLength; i++) {
        arrNew.push(callback(this[i] , i))
    }
    // console.log("🚀 ~ file: main.js ~ line 6 ~ arrNew", arrNew)

    return arrNew;
}

// let callback = (number, index) => {
//     return number * index;
// }

// Expected results
const numbers = [1, 2, 3];

console.log(numbers.myMap(function (number) {
    return number * 2;
})) // Output: [2, 4, 6]

console.log(numbers.myMap(function (number, index) {
    return number * index;
})) // Output: [0, 2, 6]


