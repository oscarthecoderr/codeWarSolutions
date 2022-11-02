//8 kyu Get number from string
function getNumberFromString(s) {
    const answer = s.split('').filter((number)=> number == parseInt(number))
    return parseInt(answer.join(''))
  }