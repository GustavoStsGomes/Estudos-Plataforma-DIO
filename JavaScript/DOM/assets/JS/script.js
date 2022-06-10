/*
Crie uma estrutura básica de projeto front-end (HTML, CSS e JS)
Copie o HTML e o CSS deste repositório
Crie um arquivo chamado scripts.js na sua pasta assets/js
Selecione os elementos: h1, button, footer e body
Se os elementos possuirem a classe dark-mode, modifique seus estilos. Caso contrário, volte os estilos para o original
*/

const button = document.getElementById('mode-selector')
const h1 = document.getElementById('page-title')
const body = document.getElementsByTagName('body')[0]
const footer = document.getElementsByTagName('footer')[0]
const darkModeClasse = 'dark-mode'

button.addEventListener('click', changeMode)

function changeMode(){
    changeClasses()
    changeText()
}

function changeClasses(){
    button.classList.toggle(darkModeClasse)
    h1.classList.toggle(darkModeClasse)
    body.classList.toggle(darkModeClasse)
    footer.classList.toggle(darkModeClasse)
    footer.classList.
}

function changeText(){
    const lightMode = "Light Mode"
    const darkMode = "Dark Mode"

    if(body.classList.contains(darkModeClasse)){
        button.innerHTML = lightMode
        h1.innerHTML = darkMode + ' ON'
        return
    }

    button.innerHTML = darkMode
    h1.innerHTML = lightMode + ' ON'
}