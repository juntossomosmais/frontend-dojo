// Desafio 2: Palindrome

function isPalindrome(word) {
  // Write your code here
  let cleanWord = word.toLowerCase().replace(/[^\w]|s+/g, '')
  let backwords = cleanWord.split('').reverse().join().replace(/,/g, '')

  return cleanWord === backwords
  
}

console.log(isPalindrome("civic")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
