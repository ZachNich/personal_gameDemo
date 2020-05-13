import stats from './welcome_dom.js'
import character from './welcome_create.js'
import data from './data.js'

// generates random stats within thresholds determined by class selected when "Embrace Chance" btn clicked
document.querySelector('#stat_roll').addEventListener('click', event => {
    let classSelected = document.querySelector('#class_select').value
    stats.statHTMLtoDOM(stats.statObjectToHTML(character[`create${classSelected}`]()))
})

// saves character to database when final btn clicked (after checking to be sure all parameters are set)
document.querySelector('#character_save').addEventListener('click', event => {
    if (document.querySelector('#char_name').checkValidity() === false) {
        window.alert('Names must be neither too short nor too long.')
    } else {
        let name = document.querySelector('#char_name').value
        let classSelected = document.querySelector('#class_select').value
        let personality = document.querySelector('#personality_select').value
        let charStats = character.statHTMLtoObject(document.querySelector('#stat_container').textContent)
        data.saveCharToDatabase(character.createCharacter(name, classSelected, personality, charStats));
        window.alert('So this is who you are. Let\'s see how you do.');
        window.location.assign('./items');
    }
})