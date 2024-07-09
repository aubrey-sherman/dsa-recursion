/** find: return t/f if val is in arr. */

function find(arr: number[], val: number): boolean {
  if (arr.length <= 0) return false;
  if (arr[0] === val) return true;
  return find(arr.slice(1), val);
}

export { find };
