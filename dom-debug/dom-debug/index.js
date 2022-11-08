const colors = ["red", "blue", "green"]

// change onClick to click
document.getElementById("add").addEventListener("click", function(e){
    const subItem = createSubItem(e)
    document.getElementById("list").appendChild(subItem)
})

function createDropDown(){
    const dropDown = document.createElement("select")
    for (let i = 0; i < colors.length; i++){
        const option = document.createElement("option") 
        option.setAttribute( 'value' , colors[i])
        option.text = colors[i]
        dropDown.append(option)
    }
    dropDown.addEventListener("change", function(e){
        e.target.parentElement.style.backgroundColor = e.target.value
    })
    return dropDown
}

// add .value to update with a string instead of an object
function createSubItem(e){
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input")
    subItem.textContent = subItemValue.value
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    return subItem
}


