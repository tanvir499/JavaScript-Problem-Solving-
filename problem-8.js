// Problem 8: Capitalize First Letter of Each Word

function capitalizeWords(str) {
  let words = str.split(" ");
  let result = [];

  for (let i = 0; i < words.length; i++) {
    let capitalWord = words[i][0].toUpperCase() + words[i].slice(1);
    result.push(capitalWord);
  }

  return result.join(" ");
}

console.log(capitalizeWords("hello world")); 
