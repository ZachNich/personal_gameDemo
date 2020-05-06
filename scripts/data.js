const API = {
    saveCharToDatabase (character) {
        return fetch('http://localhost:3000/characters', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(character)
        })
    } 
}

export default API