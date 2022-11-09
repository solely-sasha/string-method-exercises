// 1. Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.

function upperAndLowerCase(string){
   var upperCase = string.toUpperCase()
   var lowerCase = string.toLowerCase()
   var bigToLittle = upperCase.concat(lowerCase)
   
console.log(bigToLittle)
}
upperAndLowerCase("success")
// 2. Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.

function cutInHalf(string){
   var halfFloored = Math.floor(string.length/2)
console.log(halfFloored)
}
 cutInHalf('Awesome')

// cutInHalf('hello')

// 3. Write a function that uses slice() and the other functions you've written to return the first half of the given string.

function slicedString(string){
var firstHalf = Math.floor(string.length/2)
console.log(firstHalf)
var newString = string.slice(0, firstHalf)
console.log(newString)

}

slicedString('Awesome')
// 4. Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.

function mixedCases(string){
var firstSlice = Math.floor(string.length/2)
var capitalSlice = string.slice(0, firstSlice).toUpperCase()
var secondSlice = string.slice(firstSlice).toLowerCase()
var mixedCaseString = capitalSlice.concat(secondSlice)
console.log(mixedCaseString)
}

mixedCases('Awesome')