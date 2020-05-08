import data from './data.js'

const displayItemTooltip = document.querySelectorAll('.item_available').forEach(element => {
    let tooltip = document.createElement('div');
    element.addEventListener('mouseover', event => {
            tooltip.classList.remove('hidden')
            tooltip.classList.add('tooltip')
            if (tooltip.textContent == '') {
                data.getItemFromDatabase()
                .then(items => {
                    tooltip.textContent = items.find(item => item.name == event.target.textContent).description
                    event.target.appendChild(tooltip);
                })
            }
            element.addEventListener('mouseout', event => {
                        tooltip.classList.add('hidden')
                })
        })
    })

export default { displayItemTooltip }