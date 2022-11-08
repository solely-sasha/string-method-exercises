


// 1. Loop through the following array and count how many "computers" there are. Log the final count:


const officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]

let total = 0;
for (items of officeItems) {
  if (items === 'computer') {
        total++;
    }
};
console.log(`the final count is ${total}`)

// 2. Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18.


var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]


  for (people of peopleWhoWantToSeeMadMaxFuryRoad){
    if(people.age >= 18){
      console.log(`${people.name} is old enough`)
    }else{
      console.log(`${people.name} is not old enough`)
    }
  }


// nested loop practice 

var arrayOfArrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

// for(var i = 0; i < arrayOfArrays.length; i++){
//     for(var j = 0; j < arrayOfArrays[j].length; j++){
//         console.log( arrayOfArrays[i][j] )
//     }
// }

for(arrays of arrayOfArrays){
  for(items in arrays){
      console.log(arrays[items])
  }    
}