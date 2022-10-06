const { fibsRec } = require('./fibsRec');

test('return fibonacci arr with 0 items', () => {
    const fibsArr = fibsRec(0);
    expect(fibsArr).toEqual([])    
})

test('return fibonacci arr with 1 items', () => {
    const fibsArr = fibsRec(1);
    expect(fibsArr).toEqual([ 0])   
})

test('return fibonacci arr with 2 items', () => {
    const fibsArr = fibsRec(2);
    expect(fibsArr).toEqual([ 0, 1])
})

test('return fibonacci arr with 8 items', () => {
    const fibsArr = fibsRec(8);
    expect(fibsArr).toEqual([ 0, 1, 1, 2, 3, 5, 8, 13])
})

test('return fiboncacci arr with 12 items',()=>{
    const fibsArr = fibsRec(12);
    expect(fibsArr).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89])
})