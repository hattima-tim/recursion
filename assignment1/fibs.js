function fibs(n){
    let firstValue = 0;
    let secondValue = 1;
    let thirdValue=1;
    let fibsArr = n === 0 ? [] : [0];

    for (let i = 1; i < n; i++){
        fibsArr.push(thirdValue);
        thirdValue = firstValue + secondValue;
        firstValue=secondValue;
        secondValue = thirdValue;
    }
    return fibsArr;
}
console.log(fibs(0)); // []
console.log(fibs(1)); // [0]
console.log(fibs(2)); // [0,1]
console.log(fibs(4)); // [0,1,1,2]
console.log(fibs(8)); // [0,1,1,2,3,5,8,13]

module.exports = {fibs}