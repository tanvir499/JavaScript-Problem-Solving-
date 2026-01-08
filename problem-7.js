// Problem 7: Find Even Numbers in an Array
function findEvenNumbers(even) {
  let result = [];

  for (let i = 0; i < even.length; i++) {
    if (even[i] % 2 === 0) {
      result.push(even[i]);
    }
  }

  return result;
}

console.log(findEvenNumbers([1, 2, 3, 4, 5, 6])); 
