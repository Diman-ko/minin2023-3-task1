
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


let fontSize = 40


function getMinus() {

    console.log('click is working')
    if (fontSize <20) {
        fontSize = 20
    } else {
        fontSize -= 2;
        text.style.fontSize = fontSize + 'px'
    }

}


function getPlus() {
    console.log('click is working')
    if (fontSize > 100) {
        fontSize = 100
    }else {
        fontSize += 2;
        text.style.fontSize = fontSize + 'px'
    }

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
