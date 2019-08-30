// // Simple Algorithm  Seconds to Minutes
// // Create a function that accepts one argument (seconds)
// // and converts it into minutes and seconds and returns back.
// // Example input: (94)
// // Example output: "1 minutes and 34 seconds"

// function converter(sec){
//     return  (sec- sec % 60)/60 + " munites " + sec % 60 + ' seconds'}
//   console.log(converter(94))
  
  
  
  
//   // 2. Print the written number with prefix
//   // Create a function that accepts one argument (number) and returns it as a string with 'Number is: " prefix.
//   // Example input: (22) Example output: "Number is: 22"
  
  
//   function number(e){
//       return ("Number is:" + e)
//   }
  
//   console.log(number(12))
  
//   // 3. Remove the 2nd string from the 1th string
//   // Create a function that accepts two arguments(firstString, secondString) and removes the second string from the first string.
//   // Example input: ('I am a happy person.', 'person')// Example output: "I am a happy ."
  
//   function removesecond(firstString, secondString){
//     newString = firstString.replace(secondString,'')
//     return newString
//   }
//   console.log(removesecond('I am a happy person.','person'))
   
  
//   // 4. Replace the 2nd string with the 3rd string
//   // Create a function that accepts two arguments(firstString, secondString, thirdString) and replaces the 2nd string with the 3rd one in the 1th string.
//   // Example input: ('I am a bad person.', 'bad', 'good')
//   // Example output: "I am a good person."
  
//   function changeString(firstString, secondString,thirdString){
//     newString = firstString.replace(secondString,thirdString)
//     return newString
//   }
//   console.log(changeString('I am a bad person.','bad','good'))
  
//   // 5. Return the closest bigger even number of the given number
//   // Create a function that accepts one argument(number) and returns the closest bigger even number of given number.
  
//   // Example input: (354)
//   // Example output: 356
  
//   // Example input: (23)
//   // Example output: 24
  
//   function giveClosestEven(e){
//     if (e % 2 === 0 ){
//       return e +2
//     }
//     else {
//       return e +1 
//     }
//   }
  
//   console.log(giveClosestEven(23))
  
  
//   // 6. Create a simple calculator function
//   // Create a function that accepts three arguments(number1, number2, theMathOperator) and does a calculation based on the given math operator* and returns the result.
  
//   // Math operators: +, -, /, *
//   // Example input: (11,5,'+')
//   // Example output: 16
  
//   // Example input: (50,20,'/')
//   // Example output: 2.5
  
  
//   function calculator(num1, num2, theMathOperator){
//     if (theMathOperator == '+'){
//       return num1 + num2
//     }
//     if (theMathOperator == '-'){
//       return num1 - num2
//     }
//     if (theMathOperator == '*'){
//       return num1 * num2
//     }
//     if (theMathOperator == '/'){
//       return num1 / num2
//     }
//     if (theMathOperator == '%'){
//       return num1 % num2
//     }
//     else {
//       return 'lutfen dogru bir operator giriniz'
//     }
//   }
//   console.log(calculator(4,5,'+'))
  
  
  
  
//   /*3-Truncate a String*/
  
//   var yazi = prompt("bir yazi giriniz");
//   var i = prompt("kac caracter istiyorsun");
  
  
//   function truncateString(yazi,i){
  
//       if (i === 0 || i >yazi.length || i < 0)
//       alert ( "...")
//       else if (i <= yazi.length)
//       alert (yazi.slice(0, i) + "...")
  
//   }
  
//   truncateString(yazi,i)
  
  
  
  
//   /*4-Confirm the Ending*/
  
//   var yazi = prompt("bir yazi giriniz");
//   var son = prompt("bi yazi daha giriniz");
  
//   function confirmEnding(yazi,son){
  
//       deger = yazi.slice(yazi.length-son.length, yazi.length)
//       if (deger === son)
//       alert ( "true")
//       else 
//       alert ("yazilar uyusmuyor")
  
//   }
  
//   confirmEnding(yazi,son)


// function PersonProto (i, j, k) {
//   this.firstname = i;
//   this.lastname = j;
//   this.age = new Date();
// }
// PersonProto.prototype.getFullname = function() {
//   return `${this.firstname}  ${this.lastname}`
// }
// const person1 = new PersonProto('oguzhan', 'karsli', 30)
// console.log(person1)


// class PersonClass {
//   constructor(i, j, k) {
//     this.firstname = i;
//     this.lastname = j;
//     this.age = new Date()
//   }
//   getFullname() {
//     return `${this.firstname}  ${this.lastname}`
//   }
// }
// const person2 = new PersonClass('sevilay', 'karsli', 28)
// console.log(person2);

// 1. Reverse text

function reverseText(e){
  let array1 = e.split('');
  var text ='';
  for (i = array1.length- 1 ; i >= 0 ; i--) {
    text  += array1[i] 
  }
   return text
}
console.log(reverseText('Hello World!'))


// 2. Palindrome checker
// A palindrome is a word or phrase that reads the same backward as forward. 
// Write a function that checks for this. Don't use reverse function, use loops.
// Example input: isPalindrome('kayak')
// Example output: true
// Example input: isPalindrome('name')
// Example output: false

function isPalindrome(e){
  let array1 = e.split('');
  var text = '';
  for (var i = array1.length- 1 ; i >= 0 ; i--) {
    text  += array1[i] 
  }
  if(text === e){
    return true
  }
  else{
    return false
  }
}
console.log(isPalindrome('kayak'))



// 3. FizzBuzz
// Given a number as an input, print out every integer from 1 to that number. 
// However, when the integer is divisible by 2, print out “Fizz”; 
// when it’s divisible by 3, print out “Buzz”; 
// when it’s divisible by both 2 and 3, print out “Fizz Buzz”. Use for loops.
// Example input: fizzBuzz(11)
// Example output: [1, "Fizz", "Buzz", "Fizz", 5, "Fizz Buzz", 7, "Fizz", "Buzz", "Fizz", 11]

function fizzBuzz(e) {
  var array = [];
  for (let i = 1; i < e; i++) {
    if (i % 6 === 0) {
      array.push('FizzBuzz')
    } else if (i % 2 === 0) {
      array.push('Fizz')
    } else if (i % 3 === 0) {
      array.push('Buzz')
    } else
      array.push(i)
  }
  return array;
}
console.log(fizzBuzz(11))


// 4. Reverse Array
// Given an array of items, reverse the order. Don't use reverse function, use loops.
// Example input: reverseArray([22, 'hi', 12])
// Example output: [12, 'hi', 22]


function reverseArray(e){  
  var array2 = []
  for (var i = e.length- 1 ; i >= 0 ; i--) {
    array2.push(e[i])
  }
   return array2
}

var array = [22, 'hi', 12];

console.log(reverseArray(array))


// 5. Reverse Words
// Given a phrase, reverse the order of the characters of each word. Don't use reverse function, use loops.
// Example input: reverseWords('I love JavaScript!')
// Example output: 'I evol !tpircSavaJ'



function reverseText(e){
  let array1 = e.split('');
  var text ='';
  for (i = array1.length- 1 ; i >= 0 ; i--) {
    text  += array1[i] 
  }
   return text
}
console.log(reverseText('Hello World!'))

function reverseWords(e){
  let array = e.split(' ');
  var text = '';
  for (var i = 0 ; i < array.length; i++) {
    text += (reverseText(array[i])) + ' '
  }
   return text
}
console.log(reverseWords('I love JavaScript!'))


// 6. Capitalization
// Given a phrase, capitalize every word.
// Example input: capitalizeWords('i love javaScript!')
// Example output: 'I Love JavaScript!

function capitalizeWords(e) {
  let array = e.split('');
  var textResult = '';
  for (var i = 0; i < array.length; i++) {
    if (i === 0) {
      textResult += array[i].toUpperCase()
    } else {
      textResult += array[i].toLowerCase()
    }
  }
  return textResult
}
console.log(capitalizeWords('hello'))


function capitalizeSentence(e) {
  let array = e.split(' ');
  var text = '';
  for (var i = 0; i < array.length; i++) {
    text += (capitalizeWords(array[i])) + ' '
  }
  return text
}
console.log(capitalizeSentence('I love JaVaScript!'))

// 7. Subtract two Sets
// Given two arrays that contains integers, 
//remove the integers of second array from the first.
// Example input: subctractArray([1, 2, 4, 6], [2, 6])
// Example output: [1, 4]

function subctractArray(i, j) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array2[j] === array1[i]) {
        array1.splice(i, 1)
        console.log(array1)
      }
    }
  }
  return array1
}
let array1 = [1, 2, 4, 6];
let array2 = [2, 6];
console.log(subctractArray(array1, array2))



// 1. Find Highest Number inside an array
// Write a function that takes an array returns highest number of the array

function highestNumber(e) {
  e.sort(function(a, b) {
    return b - a
  })
  return e[0]
}
var array = [1, 22, 33, 4, 5, 6, 7, 9]

console.log(highestNumber(array))


// 2. count words inside a string
// Write a function that takes an and retruns a nmuber of words. ('words leave after space')
// Example input: countWords('Hello World!')
// Example output: "2"

function countWords(e){
  return array = e.split(' ').length
 }
console.log(countWords('hello World!'))


// 3. find number of the letters
// write a function that takes 2 elements one is a letter the other is an array.
// first convert to array to a string. return numbers of the letters inside the string
// Example input: countLetters('e',['Hello','Worlds!'])
// Example output: "1"

function countLetters(e, arr){
  let arr2 = arr.join(' ').split('')
  console.log(arr2)
  var count = 0;
  for (let i = 0; i < arr2.length; i++) {
    if ( e === arr2[i])
    count += 1
  }
  return count
}
console.log(countLetters('',['Hello','Worlds!']))
