//8 kyu Square(n) Sum

function squareSum(numbers){
  return numbers.map(x => x * x).reduce((prev,curv)=> prev+curv,0)
  }