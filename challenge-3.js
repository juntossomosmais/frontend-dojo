// Desafio 3: Duplicate

function duplicateCount(text) {
  // Write your code here
  let letter = text.toLowerCase().split('')
  let duplicates = 0
  let characters = []
  
  let dontRepeatLetter = [];
	letter.forEach((item) => {
      if (dontRepeatLetter.includes(item)) {
        duplicates++
        characters.push(item)
      } else {
        dontRepeatLetter.push(item)
      }
  });

	return {duplicados: duplicates, caracteres: characters}
  
}

console.log(duplicateCount("abcde")); // {duplicados: 0, caracteres: []}
console.log(duplicateCount("abcdea")); // {duplicados: 1, caracteres: ['a']}
console.log(duplicateCount("aabBcde")); // {duplicados: 2, caracteres: ['a', 'b']}
console.log(duplicateCount("aA11")); // {duplicados: 2, caracteres: ['a', 1]}
