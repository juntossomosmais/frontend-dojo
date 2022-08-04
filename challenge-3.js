// Desafio 3: Duplicate NÃO TERMINAMOS

function duplicateCount(text) {
  let letter = text.split('', text.length)
  let letterFirst, letterSecond

  for(i = 0; i <= letter.length; i++) {

    letterSecond = letterFirst
    letterSecond = text[i]

    return letterSecond
  }

  console.log(letterFirst, letterSecond)
}

console.log(duplicateCount("abcde")); // {duplicados: 0, caracteres: []}
console.log(duplicateCount("abcdea")); // {duplicados: 1, caracteres: ['a']}
console.log(duplicateCount("aabBcde")); // {duplicados: 2, caracteres: ['a', 'b']}
console.log(duplicateCount("aA11")); // {duplicados: 2, caracteres: ['a', 1]}
