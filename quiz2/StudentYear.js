function creditYear(){
let credits = parseInt(prompt("How many Credits?"));

if (credits <= 23){
    console.log("you are a freshman");
} else if (credits >24 && credits < 53){
    console.log("you are a sophomore");
} else if (credits >= 54 && credits <= 83){
    console.log("you are junior ");
} else if(credits >= 84){
    console.log("You're senior!");
} else {
    console.log("Enter a valid input")
}
}

creditYear();
