const API = {
    saveCharToDatabase (character) {
        return fetch('http://localhost:3000/characters', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(character)
        })
    },
    saveItemToDatabase (item) {
        return fetch('http://localhost:3000/items', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
    },
    getItemFromDatabase () {
        return fetch('http://localhost:3000/items')
            .then(response => response.json());
    },
    getOneItemFromDatabase (id) {
        return fetch(`http://localhost:3000/items/${id}`)
            .then(response => response.json());
    },
    addItemToInventory (item) {
        return fetch('http://localhost:3000/inventory', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
    },
    getInventory() {
        return fetch('http://localhost:3000/inventory')
            .then(response => response.json());
    },
    removeItemfromInventory (itemId) {
        return fetch(`http://localhost:3000/inventory/${itemId}`, {
            method: 'DELETE',
        })
    }
}

export default API