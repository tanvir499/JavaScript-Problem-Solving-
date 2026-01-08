
//Problem 3: Check for Palindrome
function Palindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(Palindrome("madam")); // true
console.log(Palindrome("hello")); // false
