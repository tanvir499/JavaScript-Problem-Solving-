//Problem 2: Count Vowels in a String

function countVowels(vowel) {
  let count = 0;

  for (let i = 0; i < vowel.length; i++) {
    if (
      vowel[i] === "a" ||
      vowel[i] === "e" ||
      vowel[i] === "i" ||
      vowel[i] === "o" ||
      vowel[i] === "u"
    )
{
      count++;
    }
  }

  return count;
}

console.log(countVowels("programming")); 

