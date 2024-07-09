/** revString: return a copy of a string, but in reverse. */

function revString(str: string): string {
  if (str.length < 2) return str;

  return revString(str.slice(1)) + str[0];
}

export { revString };

/*
base case:
recursive case:

"abc" -> "cba"

"abc"
"bc"
"c"

c + b + a

simple cases:
length 0
"" -> ""
length 1
"s" -> "s"


*/