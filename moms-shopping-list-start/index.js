

// reference to the form
const form = document.querySelector('#add-todo')

// reference to the ul
const list = document.querySelector('#list')


// // reference to the input value from the name of the input
// const item = form.title.value


//  create a template for the new todo items with the item variable as the parameter
// const newItem = item => {
//     const html = `<li>
//     <div>${item}</div>
//     <button class = "edit"> edit </button>
//     <button class = "delete"> X </button>
//     </li>
//     `
//     list.innerHTML += html
// }




// listen for a submit event
form.addEventListener('submit', e => {
    e.preventDefault();
    // // creat a variable for the input value
    const item = form.title.value
    // console.log(item)
    // newItem(item)
const li = document.createElement('li');
const div = document.createElement('div');
div.textContent= item
const deleteButton = document.createElement('button')
deleteButton.textContent = "delete"
const editButton = document.createElement('button')
editButton.textContent = "edit"
list.appendChild(li)
li.appendChild(div)
li.appendChild(deleteButton)
li.appendChild(editButton)


deleteButton.addEventListener('click', e => {
    console.log('delete button worked')
         e.target.parentElement.remove()
     
 })
 
   
})

// add a click event to the ul to delete items 


