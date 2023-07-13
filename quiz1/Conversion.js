function convertFarenheitToCelcuis(temperature) {
    let FinalTemperature = Math.round((temperature*(9/5))+32);
    return FinalTemperature;
}

let temperature;
temperature = prompt("Enter the value of temperature")
console.log("The temperature is" + convertFarenheitToCelcuis(temperature) );
