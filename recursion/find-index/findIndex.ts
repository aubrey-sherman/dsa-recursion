/** findIndex: return index of val in arr (or -1 if val is not present). */

function findIndex(arr: number[], val: number): number {
  if (arr.length === 0) return -1;

  if (arr[arr.length - 1] === val) {
    return arr.length - 1;
  } else {
    return findIndex(arr.slice(0, -1), val);
  }
}

export { findIndex };