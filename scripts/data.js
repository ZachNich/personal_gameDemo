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
    }
}

export default API