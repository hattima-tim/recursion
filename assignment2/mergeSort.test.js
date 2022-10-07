const mergeSort = require('./mergeSort');

test('return please input an array with elements', () => {
    const sortedArr = mergeSort([]);
    expect(sortedArr).toEqual("please input an array with elements")
})

test('return [0]', () => {
    const sortedArr = mergeSort([0]);
    expect(sortedArr).toEqual([0])
})

test('return [1,2,2,3,7,8,9]', () => {
    const sortedArr = mergeSort([2, 8, 1, 9, 3, 7, 2]);
    expect(sortedArr).toEqual([1,2,2,3,7,8,9])
})

test('return [2, 3, 6, 24, 39, 56, 100, 201]', () => {
    const sortedArr = mergeSort([2, 100, 24, 56, 6, 3, 201, 39]);
    expect(sortedArr).toEqual([2, 3, 6, 24, 39, 56, 100, 201])
})

test("return ['a', 'b', 'c', 'd', 'e']", () => {
    const sortedArr = mergeSort(['d', 'a', 'e', 'c', 'b']);
    expect(sortedArr).toEqual(['a', 'b', 'c', 'd', 'e'])
})