// 1. Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.

function upperAndLowerCase(string){
   var upperCase = string.toUpperCase()
   var lowerCase = string.toLowerCase()
   var bigToLittle = upperCase.concat(lowerCase)
   
console.log(bigToLittle)
}
upperAndLowerCase("success")
// 2. Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.


// 3. Write a function that uses slice() and the other functions you've written to return the first half of the given string.

// 4. Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.

