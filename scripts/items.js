import data from './data.js'
import dom from './items_dom.js'

const populateAvailableItems = () => {
    return data.getItemFromDatabase()
    .then(items => items.forEach(item => dom.addAvailableItemstoDOM(item)))
}

populateAvailableItems()

document.querySelector('.inventory_container').addEventListener('click', event => {
    if (event.target.id.startsWith('delete-')) {
        data.removeItemfromInventory(event.target.id.split('-')[1])
        .then(() => dom.removeInventoryFromDOM(event.target.id.split('-')[1]))
    }
})

document.querySelector('.items_available_container').addEventListener('mouseover', event => {
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

document.querySelector('.items_available_container').addEventListener('click', event => {
    if (event.target.className === "item_select") {
        data.getOneItemFromDatabase(event.target.id.split('-')[1])
            .then(item => {
                data.addItemToInventory(item)
                    .then(() => dom.addInventoryToDOM(item))
            })
    }
})