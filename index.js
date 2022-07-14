let num = 23
num = 45
// console.log(num + 2)

const toText = String(num)

// console.log(toText + 'text here')


// convert string to number
const myString = '24'
const toNum = Number(myString)
// console.log(toNum)

//boleans to number
// console.log(Number(false))
// console.log(Number(true))

//booleans to string
const falseStr = String(false)
const trueStr = String(true)
const num2 = 2345
const numToString = num2.toString()
// console.log(`first str ${falseStr} & second str ${trueStr} & ${numToString}`, true)

//check type
const str = '23'
const strType = typeof(str)
// console.log(strType)

const num1 = 234
const numType = typeof(num1)
// console.log(numType)

/**** Booleans */
// console.log(true == true) // exactly equals
// console.log(true == 'true') //exactly
// console.log('true' == true)
// console.log('true' === true)
// console.log(true === 'true')

const checkNum = 100
// console.log(checkNum === true)

const checkNum2 = 7 + 1 + 2.34
// console.log(checkNum2 === true)

// console.log(checkNum2 && true)
// console.log(checkNum2 && false && false && true)

// console.log(checkNum2 || false) // 10.34
// console.log(undefined || false) // false
// console.log(3 || false) // 
// const nullNum = -0
// console.log(null || nullNum || 'test' && true) // 

/**** Comparisons */

let isEqual = 78 < 90 //true
isEqual = 78 <= 78 // true 
isEqual = 78 >= 100 // true
isEqual = 78 != 100 // false 
console.log(isEqual)