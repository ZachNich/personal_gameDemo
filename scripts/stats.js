import events from './welcome_events.js'

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

// capitalize first letter in string

const capitalizeString = (string) => {
    const newString = string.charAt(0).toUpperCase() + string.slice(1);
    return newString;
}

// convert statBlock object into HTML

const statObjectToHTML = (object, tempStatsObject) => {
    let statString = ``;
    tempStatsObject = object;
    for (const key in object) {
            statString += `<p>${capitalizeString(key)}: ${object[key]} </p>`
    }
    return statString;
}

// insert statBlock HTML into DOM

const statBlock = document.querySelector('#stat_container')
const statHTMLtoDOM = (string) => {
    statBlock.innerHTML = string;
}

export default {createGodsend, createLogician, createEmpath, createStrongman, createDeprived, statObjectToHTML, statHTMLtoDOM}