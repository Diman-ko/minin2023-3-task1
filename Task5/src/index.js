const panel = document.querySelector('#panel')

const text = document.querySelector('h3')
const styles = window.getComputedStyle(text)

let  fontSize = parseInt(styles.fontSize)

/*const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const normal = document.querySelector('#normal')
const bold = document.querySelector('#bold')
const italic = document.querySelector('#italic')*/


panel.addEventListener('click', pop)

  function pop(event) {

      const data = event.target.dataset.type

      console.log(data)
      console.log(event.target.textContent)
      console.log('click is working')

   }

/*
minus.addEventListener('click', pop)
plus.addEventListener('click', pop)
normal.addEventListener('click', pop)
bold.addEventListener('click', pop)
italic.addEventListener('click', pop)*/


function getMinus() {
    document.type = type
    console.log('click is working')
    if (fontSize <20) {
        fontSize = 20
    } else {
        fontSize -= 2;
        text.style.fontSize = fontSize + 'px'
    }

}


function getPlus(type) {
    document.type = type
    console.log('click is working')
    if (fontSize > 100) {
        fontSize = 100
    }else {
        fontSize += 2;
        text.style.fontSize = fontSize + 'px'
    }

}

function getNormal(type) {
    console.log('click is working')
    text.style.fontWeight = 'normal'
    text.style.fontStyle = "normal"

}


function getBolt(type) {
    console.log('click is working')
    text.style.fontWeight = 'bold'
}

function getItalic(type) {
    console.log('click is working')
    text.style.fontStyle = "italic"

}
