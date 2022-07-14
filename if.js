let possibleValue = true
let value2 = false
let alsoAllowed = true

if(!value2 && //true
    possibleValue && // also not true
    alsoAllowed) { // and also true
        console.log("this is truthy");
    } else {
        console.log("this is falsy");
    }

let priceOfFruit = 6;
let total = 0;

switch (priceOfFruit) {
  case 6:
    console.log("it is 6");
    console.log("it's good");
    total = total + priceOfFruit;
    break;

  case 5:
    console.log("it is 6");
    console.log("it's good");
    total = total + priceOfFruit;
    break;
}
const result = (priceOfFruit == 6) ? "it's good" : "it's too low"
console.log(result)