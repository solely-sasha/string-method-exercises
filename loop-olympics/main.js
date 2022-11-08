/*      Preliminary
   
1. Write a for loop that prints to the console the numbers 0 through 9.

*/
for(var i=0; i<10; i++){
    console.log(i)
}

// 2. Write a for loop that prints to the console 9 through 0.

for(var i=9; i>=0; i--){
    console.log(i)
}

// 3. Write a for loop that prints these fruits to the console.const fruit = ["banana", "orange", "apple", "kiwi"]

const fruit = ["banana", "orange", "apple", "kiwi"]
for(var i=0; i<fruit.length; i++){
    console.log(fruit[i])
}

//Bronze Medal

//1. Write a for loop that will push the numbers 0 through 9 to an array.

const numArray = []
for(i=0; i<10; i++){
numArray.push(i)
}

console.log(numArray)
// 2. Write a for loop that prints to the console only even numbers 0 through 100.

for(i=0; i<101; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}

// 3. Write a for loop that will push every other fruit to an array.`const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]`

const fruit2 = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

const fruit3 = [];
for(var i=0; i<fruit2.length; i++){
  if(i % 2 === 0){
    fruit3.push(fruit2[i])
   
  }
}
console.log(fruit3)

// Silver Medal

const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  


// 1. Write a loop that will print out all the names of the people of the people array

for(var i=0; i<peopleArray.length; i++){
    console.log(peopleArray[i].name)
}

for(people of peopleArray){
   console.log(people.name)
}

// 2. Write a loop that pushes the names into a names array, and the occupations into an occupations array.

const names = []
const occupations = []
for(var i=0; i<peopleArray.length; i++){
   names.push(peopleArray[i].name)
   occupations.push(peopleArray[i].occupation)

}
console.log(names)
console.log (occupations)

/* 3. Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford",
 and every other occupation to another array starting with, in this case, "Singer".

*/

const everyOtherName = []
const everyOtherOccupation = []
for(var i=0; i<peopleArray.length; i++){
    if(i % 2 !==0){
    everyOtherName.push(peopleArray[i].name)
    everyOtherOccupation.push(peopleArray[i].occupation)
    }

 }
console.log(everyOtherName)
console.log(everyOtherOccupation)


var lunch = {
	sandwich: 'ham',
	snack: 'chips',
	drink: 'soda',
	desert: 'cookie',
	guests: 3,
	alcohol: false,
};

