//Problem 5: Remove Duplicates from an Array

function removeDuplicates(duplicate) {
  return [...new Set(duplicate)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); 
