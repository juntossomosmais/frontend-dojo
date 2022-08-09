// Desafio 1: FizzBuzz

function fizzBuzz(number) {
  // Write your code here
  let resolution = [];
  
  for (let i = 1; i < number+1; i++) {
      if(i % 3 === 0 && i % 5 === 0) {
          triage = 'FizzBuzz'
        } else if(i % 3 === 0){
          triage = 'Fizz'
        } else if(i % 5 === 0) {
          triage = 'Buzz'
        } else {
          triage = i
        }
        resolution.push(triage)
  }
  return resolution;  
}

console.log(fizzBuzz(15));
// ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
