function fibsRec(p, count = 1) {
  if (p <= 0) return count === 1 ? [] : [0];
  if (p === 1 && count === 1) return [0];

  const n = count === 1 ? p - 1 : p;

  const a = Math.sqrt(5);
  const b = (1 + a) / 2;
  const c = (1 - a) / 2;
  const nthFibFromBinetFibFormula = Math.floor((b ** n - c ** n) / a);

  const prevFibsArr = fibsRec(n - 1, (count += 1));
  const newArr = [...prevFibsArr, nthFibFromBinetFibFormula];
  return newArr;
}

console.log(fibsRec(0)); // []
console.log(fibsRec(1)); // [0]
console.log(fibsRec(2)); // [0,1]
console.log(fibsRec(4)); // [0,1,1,2]
console.log(fibsRec(8)); // [0,1,1,2,3,5,8,13]
console.log(fibsRec(9)); // [0,1,1,2,3,5,8,13,21]
console.log(fibsRec(10)); // [0,1,1,2,3,5,8,13,21,34]

module.exports = { fibsRec };
