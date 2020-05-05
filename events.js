import main from './main.js'

const statBlock = document.querySelector('#stat_container')

const rollStats = document.querySelector('#stat_roll').addEventListener('click', event => {
    let classSelected = document.querySelector('#class_select').value
    main.statHTMLtoDOM(main.statObjectToHTML(main[`create${classSelected}`]()))
})

export default {rollStats}