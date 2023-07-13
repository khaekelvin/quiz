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
