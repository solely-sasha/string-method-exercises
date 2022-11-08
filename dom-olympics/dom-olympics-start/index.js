
// create an h1 
const h1 = document.createElement("h1");

// enter text for h1
h1.textContent = "JavaScript is cool!!"

// append h1 to document header
document.getElementById('header').appendChild(h1).style.textAlign = "center"

// create a subtitle with an h2 element
const subTitle = document.createElement('h2');

// add the text and styling 
subTitle.innerHTML = '<span class="name">Sasha</span> wrote the JavsScript'

// append subtitle to the header
document.getElementById('header').appendChild(subTitle)
subTitle.style.textAlign = "center"

const messages = document.querySelectorAll(".message");

messages[0].textContent = "JavaScript is fun!";
messages[1].textContent = "Yeah it is!";
messages[2].textContent = "I'm excited to learn more";
messages[3].textContent = "You're doing great";


// select the clear button
const clear = document.getElementById('clear-button')

// select the div with class of messages
const allMessages = document.querySelector(".messages")


// clear messages when button is clicked
clear.addEventListener("click", () =>{
    allMessages.textContent = ""
})

