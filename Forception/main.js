
var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

  function forception(people, alphabet){
    var sillyArray = []
    for(var i=0; i< people.length; i++){
        sillyArray.push(`${people[i]}:`)
      for(var j=0; j<alphabet.length; j++)
      sillyArray.push(alphabet[j])
    
 
  }
  console.log(sillyArray)
  }
    
  

    
  
   
forception(people, alphabet)