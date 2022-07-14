// results "the greater number of x and y is x"

// function greaterNum (x,y) {
//     if (x > y) {
//       return `the greater number of ${x} and ${y} is ${x}`
    
// }  else { return "the greater number of 8 and 4 is 4"

// }
// }
// console.log(greaterNum(8,4))

//function greaterNum
//takes two params

let x = 5
let y = 7

function greaterNum(x,y) {
    if (x >= y) {
        return x
    } else {
        return y
    }
}
const bigNum = greaterNum(x,y)
console.log(`The greater number of ${x} and ${y} is ${bigNum}`);
