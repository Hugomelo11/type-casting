const date = new Date()
console.log(date)


const hour = date.getHours()
console.log('here is miller hour ---->', hour)

let greeting // global scope
if(hour > 12) {
    greeting = 'afternoon'
} else {
    greeting = 'morning'
}

let message1 = `good ${greeting} class`

//same as


let message2 = `good ${hour > 12 ? 'afternoon' : 'morning'} class`
console.log(message2)


