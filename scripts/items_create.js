import data from './data.js'

const createItem = (name, description, value, use) => ({
    name: name,
    description: description,
    value: value,
    use: use,
    amount: 1
})

const createEquipment = (name, description, value, slot, stats) => ({
    name: name,
    description: description,
    value: value,
    slot: slot,
    stats: stats,
    amount: 1
})

const holy_book = createItem('Holy book', 'A white book well-worn at the edges. As you turn the pages, you don\'t recognize the language. Closing the book, you notice a faded four-pointed star on the cover.', 10, false)

const ragged_hat = createEquipment('Ragged hat', 'A black tophat that\'s seen better days. You give it a good tuss up in hopes of restoring its former shape.', 15, 'head', {attack: 0, defense: 1})

const rusty_key = createItem('Rusty key', 'A suprisingly large key rusted all over. Red comes off on your fingers when you touch it, and it seems to be on its last leg, but maybe it could prove useful in the future.', 0, false)

const dead_branch = createEquipment('Dead branch', 'A cumbersome branch fallen from a dying oak. You decided to pick it up after seeing it on the ground. Did you pick it up to save it from lonely death, or did you pick it up to sell it to someone dumber than you? You can\'t quite remember. In any case, it can be used as a makeshift weapon.', 20, 'weapon', {attack: 1, defense: 0})

// data.saveItemToDatabase(holy_book)
// data.saveItemToDatabase(ragged_hat)
// data.saveItemToDatabase(rusty_key)
// data.saveItemToDatabase(dead_branch)