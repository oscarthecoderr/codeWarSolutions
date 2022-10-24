// 8 kyu Remove String Spaces
// 1. Simple, remove the spaces from the string, then return the resultant string.

const noSpace = x =>
x.split(' ').join('')




// Count of positives / sum of negative
// 2. DESCRIPTION: Given an array of integers. Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

function countPositivesSumNegatives(input) {
  return input && input.length ? input.reduce((prev,curr) => (curr > 0 ? prev[0] = prev[0] + 1 : prev[1] = prev[1] + curr, prev), [0,0]) : []
}
//very confusing


// Abbreviate a Two Word Name
// 3. Write a function to convert a name into initials. This kata strictly takes two words with one space in between them. The output should be two capital letters with a dot separating them.

function abbrevName(name){
  return name.toUpperCase().split(' ').map(x => x[0]).join('.')
}


// Thinkful - Logic Drills: Traffic light
// 4.You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again. Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to. For example, when the input is green, output should be yellow.

function updateLight(current) {
  return ({green: 'yellow',yellow: 'red',red: 'green'})[current]
}


// Quarter of the year
// 5.DESCRIPTION: Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number. For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
  return Math.ceil(month / 3) 
}

// 6. Even or Odd
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  if(number % 2 === 0){
    return 'Even'
  } else{
    return 'Odd'
  }
}

//7. Opposite number
// Very simple, given an integer or a floating-point number, find its opposite.

function opposite(number) {
  return -1 * number
}

//8. Function 1 - hello world
//Make a simple function called greet that returns the most-famous "hello world!".

function greet(){
  return "hello world!"
}

//9. Convert a Number to a String!
//We need a function that can transform a number (integer) into a string.

function numberToString(num) {
  return num.toString()
}

//10. Reversed Strings
//Complete the solution so that it reverses the string passed into it.

function solution(str){
  return str.split('').reverse().join('')
}

//11. 


function removeEveryOther(arr){
  for (let i = 1; i < arr.length; i++){
    arr.splice(i,1)     
  }
  return arr
}


//12. array plus array
//I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
//P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}


//12. Convert boolean values to strings 'Yes' or 'No'.

//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
  if (bool){
    return'Yes'
  }else{
    return 'No'
  }
 }
 // adding a boolean(true or false) value inside the code block. 
 // return 'Yes' boolean true or 'No'string for false
 
 // this is the name as return bool ? 'Yes' : 'No'

 //13. return ngeative number 
 
 //In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
 function makeNegative(num) {
  return -Math.abs(num)
}

// 14. Find the smallest integer in the array
//Given an array of integers your solution should find the smallest integer.
class SmallestIntegerFinder {
  findSmallestInt(args) {
//    args = Math.min()
//    return args
    console.log(Math.min(...args))
   return Math.min(...args)
  }
   
}
// 15. 8 kyu 
//Sum of positive
function positiveSum(arr) {
  let answer = 0
 for(let i = 0 ; i < arr.length ; i+=1){
  if(arr[i] > 0){
    console.log(arr[i])
    answer += arr[i]
  }   
 }

 return answer
}

// the parameter is giving me an array of numbers
// we want to return the sum of all positive numbers
// [1,-4,7,12] => 1+7+12 = 20
// create a variable called answer initialized to 0
// loop through all the numbers in the array
//      check each number if its positive (> 0)
   //  if its true, add the number to variable answer

// return answer