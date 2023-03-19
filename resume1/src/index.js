const panel = document.querySelector('#panel')


// создание переменных
const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const normal = document.querySelector('#normal')
const bold = document.querySelector('#bold')
const italic = document.querySelector('#italic')


const text = document.querySelector('h3')




// стили
const styles = window.getComputedStyle(text)
let  fontSize = parseInt(styles.fontSize)

// работа с кнопками и создание функций

minus.addEventListener('click', () => {
    if(fontSize <=10){
        fontSize = 10
    }  else{
        fontSize--
    }
    text.style.fontSize = fontSize + "px"})

plus.addEventListener('click', () => {
    if(fontSize >=100){
        fontSize = 100
    }  else{
        fontSize++
    }
    text.style.fontSize = fontSize + "px"})

normal.addEventListener('click', () => {
    text.style.fontWeight = 'normal'
    text.style.fontStyle = 'normal'
})

bold.addEventListener('click', () => {
    text.style.fontWeight = 'bold'
})

italic.addEventListener('click', () => {
    text.style.fontStyle = 'italic'
})










//  1)
/*function getMinus() {
    document.type = type
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

}*/



// 2)

    /*const minus = document.querySelector("#minus");
    const plus = document.querySelector("#plus");
    const normal = document.querySelector("#normal");
    const bold = document.querySelector("#bold");
    const italic = document.querySelector("#italic");
    const text = document.querySelector("h3");

    const styles = window.getComputedStyle(text);
    let fontSize = parseInt(styles.fontSize);

    minus.addEventListener("click", () => {
        fontSize -= 1;
        text.style.fontSize = fontSize + "px";
    });

    plus.addEventListener("click", () => {
        fontSize += 1;
        text.style.fontSize = fontSize + "px";
    });

    normal.addEventListener("click", () => {
        text.style.fontWeight = "normal";
        text.style.fontStyle = "normal";
    });
    bold.addEventListener("click", () => (text.style.fontWeight = "bold"));
    italic.addEventListener("click", () => (text.style.fontStyle = "italic"));
*/