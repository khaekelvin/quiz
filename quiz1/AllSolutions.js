let  item1, item2;
item1 = parseInt(prompt("Enter the cost of item1"));
item2 = parseInt(prompt("Enter the cost of item2"));
let TotalCost = (item1 + item2);
console.log("The total cost is" + TotalCost);
alert(typeof TotalCost)

function convertFarenheitToCelcuis(temperature) {
    let FinalTemperature = Math.round((temperature*(9/5))+32);
    return FinalTemperature;
}

let temperature;
temperature = prompt("Enter the value of temperature")
console.log("The temperature is" + convertFarenheitToCelcuis(temperature) );

function CheckDivisibleByTen(value) {
    if (value % 10 === 0){
        return true
    } else {
        return false
    }

}
    number = prompt("Enter the number");
    if (number % 10)
    console.log("Number is divisible by ten");
    else
    console.log("Number is not divisible by ten");

DivisibleByTen();
