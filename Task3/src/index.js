
const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const normal = document.querySelector('#normal')
const bold = document.querySelector('#bold')
const italic = document.querySelector('#italic')
const text = document.querySelector('#text')


minus.addEventListener('click', getMinus)
plus.addEventListener('click', getPlus)
normal.addEventListener('click', getNormal)
bold.addEventListener('click', getBolt)
italic.addEventListener('click', getItalic)


function getMinus() {
    console.log('click is working')
    text.style.fontSize = '40px'

}


function getPlus() {
    console.log('click is working')
    text.style.fontSize = '80px'
}

function getNormal() {
    console.log('click is working')
    text.style.fontWeight = 'normal'
    text.style.fontStyle = "normal"
}


function getBolt() {
    console.log('click is working')
    text.style.fontWeight = 'bold'
}

function getItalic() {
    console.log('click is working')
   text.style.fontStyle = "italic"

}








