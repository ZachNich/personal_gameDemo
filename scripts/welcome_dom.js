// capitalize first letter in string
const capitalizeString = (string) => {
    const newString = string.charAt(0).toUpperCase() + string.slice(1);
    return newString;
}

// convert statBlock object into HTML
const statObjectToHTML = (object) => {
    let statString = ``;
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

export default { statObjectToHTML, statHTMLtoDOM }