const availItemsContainer = document.querySelector('.items_available_container')
const addAvailableItemstoDOM = (object) => {
    availItemsContainer.innerHTML += `
    <section class='item_available' id='available-${object.id}'>
        <p>${object.name}</p>
        <div id='tooltip-${object.id}'></div>
        <button class='item_select' id='select-${object.id}'>Pick Up</button>
    </section>
    `
}

const invContainer = document.querySelector('.inventory_container')
const addInventoryToDOM = (object) => {
    let newItem = document.createElement('section')
    newItem.id = `item-${object.id}`
    newItem.innerHTML = `
    <p>${object.name}</p>
    <p>Value: ${object.value}</p>
    <p>Description: ${object.description}</p>
    <button id="delete-${object.id}">Drop</button>
    <button id="next">Take it and move on with no regret</button>
    `
    invContainer.appendChild(newItem);
}

const removeInventoryFromDOM = (id) => {
    let currentItem = document.querySelector(`#item-${id}`)
    currentItem.parentElement.removeChild(currentItem)
}

export default { addInventoryToDOM, removeInventoryFromDOM, addAvailableItemstoDOM }