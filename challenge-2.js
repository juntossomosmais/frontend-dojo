// Desafio 2: Palindrome

function isPalindrome(word) {
  let backwords = word.split('', word.length)
  let newWorld = word.split('', word.length)

  backwords.reverse()

  return newWorld.every((el, index) => {
    
    return el === backwords[index] ? true : false
  })
}

console.log(isPalindrome("civic")) // true
console.log(isPalindrome("race a car")) // false
console.log(isPalindrome("ovo")) // true
