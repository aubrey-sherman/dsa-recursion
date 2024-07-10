/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(
    arr: number[],
    val: number,
    left = 0,
    right = arr.length): number {

  if (left === right) return -1;

  const midPoint = Math.floor( (left + right) / 2);
  if (arr[midPoint] === val) return midPoint;
  if (arr[midPoint] > val) return binarySearchIndex(arr, val, left, midPoint);
  return binarySearchIndex(arr, val, midPoint + 1, right);
}

export { binarySearchIndex };


/*

binarySearchIndex([1,2,3,4], 3); // 2

if curr val equals 3 return the index
if curr val is greater than 3,
otherwise return binarySearchIndex(arr )

binarySearchIndex([1,2,3,4], 3); // 2
binarySearchIndex([1,2,3,4], 5); // -1
*/