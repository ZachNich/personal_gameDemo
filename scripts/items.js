import data from './data.js'
import dom from './items_dom.js'

// get all available items from database, then insert them into the DOM
const populateAvailableItems = () => {
    return data.getItemFromDatabase()
    .then(items => items.forEach(item => dom.addAvailableItemstoDOM(item)))
}

// populates DOM on page load with all available items
populateAvailableItems()

// adds mouseover event to available items container
// tooltips will generate once and display when item is hovered over
// tooltips receive class 'hidden' on mouseleave (removes 'hidden' on mouseover)
const itemsAvailContainer = document.querySelector('.items_available_container')
itemsAvailContainer.addEventListener('mouseover', event => {
    if (event.target.className === 'item_available') {
        let id = event.target.id.split('-')[1]
        let tooltip = document.getElementById(`tooltip-${id}`);
        tooltip.classList.add('tooltip')
        tooltip.classList.remove('hidden')
        if (tooltip.textContent == '') {
            data.getOneItemFromDatabase(id)
            .then(item => {
                tooltip.textContent = item.description
                event.target.appendChild(tooltip);
            })
        }
        event.target.addEventListener('mouseleave', event => {
            tooltip.classList.add('hidden')
        })
    }
})

// adds click event to "Pick Up" btns
// when clicked, adds the item to inventory database and adds item info to DOM with drop btn
// alerts user if item is already in inventory, or if trying to pick up more than one item at a time
const invContainer = document.querySelector('.inventory_container')
itemsAvailContainer.addEventListener('click', event => {
    if (event.target.className === "item_select") {
        let heldItems = []
        if (invContainer.children.length > 0) {
            for (let i = 0; i < invContainer.children.length; i++) {
                heldItems.push(invContainer.children[i].id.split('-')[1])
            }
            if (heldItems.includes(event.target.id.split('-')[1])) {
                return window.alert('You\'ve already got that item.')
            } else return window.alert('One piece of trash is enough. Have some pride, will you?')
        }
        data.getOneItemFromDatabase(event.target.id.split('-')[1])
            .then(item => {
                data.addItemToInventory(item)
                    .then(() => dom.addInventoryToDOM(item))
            })
    }
})

// adds click event to "Drop" btns
// when clicked, removes item from inventory database and removes associated DOM element
invContainer.addEventListener('click', event => {
    if (event.target.id.startsWith('delete-')) {
        data.removeItemfromInventory(event.target.id.split('-')[1])
        .then(() => dom.removeInventoryFromDOM(event.target.id.split('-')[1]))
    }
    if (event.target.id === 'next') {
        window.alert('The breath of autumn is upon you. Step forward with the westerly wind.');
        window.location.assign('./start');
    }
})
