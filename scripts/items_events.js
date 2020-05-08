import data from './data.js'
import itemsMain from './items.js'

const displayItemTooltip = document.querySelectorAll('.item_available').forEach(element => {
    let tooltip = document.createElement('div');
    element.addEventListener('mouseover', event => {
            tooltip.classList.remove('hidden')
            tooltip.classList.add('tooltip')
            if (tooltip.textContent == '') {
                data.getItemFromDatabase()
                .then(items => {
                    tooltip.textContent = items.find(item => item.name == event.target.textContent).description
                    event.target.parentElement.appendChild(tooltip);
                })
            }
            element.addEventListener('mouseout', event => {
                        tooltip.classList.add('hidden')
                })
        })
    })

const addItemToInventory = document.querySelectorAll('.item_select').forEach(element => {
    element.addEventListener('click', event => {
        data.getItemFromDatabase()
            .then(items => {
                let selectedItemObject = items.find(item => item.name == event.target.previousElementSibling.textContent)
                data.addItemToInventory(selectedItemObject)
                    .then( () => data.getInventory())
                    .then(inventory => {
                        inventory.forEach(item => itemsMain.addInventoryToDOM(item))
                    })
            })
    })
})

export default { displayItemTooltip, addItemToInventory }