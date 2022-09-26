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