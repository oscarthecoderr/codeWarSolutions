//Clock shows h hours, m minutes and s seconds after midnight.Your task is to write a function which returns the time since midnight in milliseconds.


function past(h, m, s){
  return Math.ceil(new Date().setHours(h,m,s) - new Date().setHours(0,0,0))
}

//new methods .setHours