const addInventoryToDOM = (object) => {
    let newItem = document.createElement('section')
    newItem.id = `item-${object.id}`
    newItem.innerHTML = `
    <p>${object.name}</p>
    <p>Value: ${object.value}</p>
    <p>Description: ${object.description}</p>
    <button id="delete-${object.id}">Drop</button>
    `
    document.querySelector('.inventory_container').appendChild(newItem);
}

const removeInventoryFromDOM = (id) => {
    let currentItem = document.querySelector(`#item-${id}`)
    currentItem.parentElement.removeChild(currentItem)
}

const addAvailableItemstoDOM = (object) => {
    document.querySelector('.items_available_container').innerHTML += `
    <section class='item_available' id='available-${object.id}'>
        <p>${object.name}</p>
        <div id='tooltip-${object.id}'></div>
        <button class='item_select' id='select-${object.id}'>Pick Up</button>
    </section>
    `
}

export default { addInventoryToDOM, removeInventoryFromDOM, addAvailableItemstoDOM }