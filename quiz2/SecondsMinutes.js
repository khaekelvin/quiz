function CalculateTotalSeconds(){  //declare function
let TotalSeconds = parseInt(prompt("number of seconds"));  //no of seconds

const minute = Math.floor(TotalSeconds / 60);  //to find the minutes, Math.floor rounds down the result

const second = (TotalSeconds % 60);  //to find the seconds remaining

console.log(minute);  //print minute
console.log(second);  //print second
}

CalculateTotalSeconds();//call function




