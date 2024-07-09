/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr: number[], val: number, left = 0, right = arr.length): boolean {
  if (left === right) return false;

  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === val) return true;
  if (val > arr[mid]) return binarySearch(arr, val, mid + 1, right);
  return binarySearch(arr, val, left, mid);
}

export { binarySearch };


// function binarySearch(arr: number[], val: number, left = 0, right = arr.length): boolean {
//   if (arr.length <= 0) return false;

//   const mid = Math.floor(arr.length / 2);
//   if (arr[mid] === val) return true;
//   if (val > arr[mid]) return binarySearch(arr.slice(mid+1), val, left, right);
//   return binarySearch(arr.slice(0, mid), val, left, right);
// }

/*
base case: empty array return false
recursive case:
find the midpoint of the length of the array
check if array at midpoint is val, return true
if val > arr at the midpoint, recurse with sliced array at midpoint + 1
otherwise
recurse with sliced array at 0 to midpoint

length 0 []


length 1 [2], 1


length 1 [1], 2


length 2 [1,2], 2
mid = 1;


length 2 [1,2], 3
mid = 1

length 2 [1,2], 0


*/