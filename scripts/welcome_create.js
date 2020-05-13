// creates character object from input
const createCharacter = (name, classSelected, personality, stats) => ({
    name: name,
    classSelected: classSelected,
    personality: personality,
    stats: stats
})

// takes the randomized stats that are displayed to the DOM from the "Embrace Chance" btn and saves them to an object in order to preserve the rolled stats
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

// create statBlock object
const createStatBlock = (faith, smarts, connection, strength, ignorance) => ({
    faith: faith,
    smarts: smarts,
    connection: connection,
    strength: strength,
    ignorance: ignorance
})

// return random numbers between min and max arguments (inclusive)
const getRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// feed createStatBlock with parameters appropriate to class
const createGodsend = () => createStatBlock(getRandomNum(6, 10), getRandomNum(4, 7), getRandomNum(4, 7), getRandomNum(1, 5), getRandomNum(5, 10));

const createLogician = () => createStatBlock(getRandomNum(1, 5), getRandomNum(6, 10), getRandomNum(4, 7), getRandomNum(1, 5), getRandomNum(4, 7));

const createEmpath = () => createStatBlock(getRandomNum(3, 6), getRandomNum(3, 6), getRandomNum(6, 10), getRandomNum(3, 6), getRandomNum(1, 5));

const createStrongman = () => createStatBlock(getRandomNum(4, 7), getRandomNum(1, 5), getRandomNum(4, 7), getRandomNum(6, 10), getRandomNum(4, 7));

const createDeprived = () => createStatBlock(getRandomNum(2, 5), getRandomNum(2, 5), getRandomNum(2, 5), getRandomNum(2, 5), getRandomNum(2, 5));


export default { createCharacter, statHTMLtoObject, createGodsend, createLogician, createEmpath, createStrongman, createDeprived }