
function sum(x,y) {
    const sum = (x,y) => { // ES 6 arrow function
    if (typeof(x) != "number") {
        return "No no no!"
    }
    if (y == undefined)
    {
        return x
    } else {
        return x + y
    }
   
}
}
sum();