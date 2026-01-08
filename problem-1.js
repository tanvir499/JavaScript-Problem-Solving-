//Problem 1: Reverse a String

function reverseString(reverse) {
  return reverse.split("").reverse().join("");
}

console.log(reverseString("hello"));