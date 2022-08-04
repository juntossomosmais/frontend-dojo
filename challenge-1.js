// Desafio 1: FizzBuzz

function fizzBuzz(number) {
  if(number % 3 === 0 && number % 5 === 0) {
    console.log('FizzBuzz')
  } else if(number % 3 === 0){
    console.log('Fizz')
  } else if(number % 5 === 0) {
    console.log('Buzz')
  } else {
    console.log(number)
  }
}

fizzBuzz(3);
fizzBuzz(5);
fizzBuzz(6);
fizzBuzz(15);
fizzBuzz(16);
// ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

/* 
  Quando os números são divisíveis por 3 vai ser Fizz <-
  Quando os números são divisíveis por 5 vai ser Buzz <-
  Quando os números são divisíveis por 3 e 5 vai ser FizzBuzz <-
*/
