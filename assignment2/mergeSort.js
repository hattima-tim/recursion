const mergeSort = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0)
    return "please input an array with elements";

  const firstIndex = 0;
  const lastIndex = arr.length - 1;
  if (firstIndex === lastIndex) {
    return arr;
  }

  const mid = Math.floor((firstIndex + lastIndex) / 2);
  const leftArr = arr.slice(0, mid + 1);
  const rightArr = arr.slice(mid + 1, lastIndex + 1);

  const sortedArrFromLeft = mergeSort(leftArr);
  const sortedArrFromRight = mergeSort(rightArr);
  const mergedArr = [];

  let i = 0,
    j = 0,
    k = 0;
  const leftSortedArrLength = sortedArrFromLeft.length;
  const rightSortedArrLength = sortedArrFromRight.length;
  while (i < leftSortedArrLength && j < rightSortedArrLength) {
    if (sortedArrFromLeft[i] < sortedArrFromRight[j]) {
      mergedArr[k++] = sortedArrFromLeft[i++];
    } else {
      mergedArr[k++] = sortedArrFromRight[j++];
    }
  }

  for (; i < leftSortedArrLength; i++) {
    mergedArr[k++] = sortedArrFromLeft[i];
  }
  for (; j < rightSortedArrLength; j++) {
    mergedArr[k++] = sortedArrFromRight[j];
  }

  return mergedArr;
};

console.log(mergeSort([]));
// please input an array with elements

console.log(mergeSort([0]));
// [0]

console.log(mergeSort([2, 8, 1, 9, 3, 7, 2]));
// [1,2,2,3,7,8,9]

console.log(mergeSort([2, 100, 24, 56, 6, 3, 201, 39]));
// [2, 3, 6, 24, 39, 56, 100, 201]

console.log(mergeSort(['d', 'a', 'e', 'c', 'b']))
// [ 'a', 'b', 'c', 'd', 'e' ]

module.exports = mergeSort;