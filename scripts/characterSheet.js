const createCharacter = (name, classSelected, personality, stats) => ({
    name: name,
    classSelected: classSelected,
    personality: personality,
    stats: stats
})

const statHTMLtoObject = (string) => {
    let valuesOnly = string.match(/\d+/g)
    return {
        faith: valuesOnly[0],
        smarts: valuesOnly[1],
        connection: valuesOnly[2],
        strength: valuesOnly[3],
        ignorance: valuesOnly[4]
    }
}

export default {createCharacter, statHTMLtoObject}