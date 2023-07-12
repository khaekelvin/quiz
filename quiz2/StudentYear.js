function CreditYear(){//declare function
    let credits = prompt(parseInt(("How many credits?")));//ask for credits
let year;//declare year

if (credits <= 23){
    year= "freshman";//23 or less
}

else if (credits > 24 && credits < 53 ){
    year="sophomore" ;//between 24 and 53
}

else if (credits > 53 && credits < 83){
    year ="junior ";//between 53 and 83
}

else {
    year = "senior";// credits > 84 and over
}

console.log("you are a " + year)//print year
}

CreditYear();//call function



/*let credits = prompt(parseInt(("How many credits?")));//ask for credits
let year;//declare year

if (credits <= 23){
    year= "freshman";//23 or less
}

else if (credits > 24 && credits < 53 ){
    year="sophomore" ;//between 24 and 53
}

else if (credits > 53 && credits < 83){
    year ="junior ";//between 53 and 83
}

else {
    year = "senior";// credits > 84 and over
}

console.log("you are a " + year)//print year
*/


