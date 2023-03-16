// code your solution here
function saturdayFun(string = "roller-skate") {
    return `This Saturday, I want to ${string}!`;
}
saturdayFun();

function mondayWork(string = "go to the office") {
    return `This Monday, I will ${string}.`;
}
mondayWork();

function wrapAdjective(someSymbol) {
    return function(myString) {
      return `You are ${someSymbol}${myString}${someSymbol}!`;
    }
  }
  
