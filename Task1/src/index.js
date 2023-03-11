const box1 = document.querySelector('#box1')
const box2 = document.querySelector('#box2')
const box3 = document.querySelector('#box3')

//const conteiner = document.querySelector('#conteiner')

box1.addEventListener('click', changeColor1)
box2.addEventListener('click', changeColor2)
box3.addEventListener('click', changeColor3)


//conteiner.addEventListener('click', changeColor)

    function changeColor1() {
        console.log('click is working')

        if (box1.classList.contains('circle')) {
            box1.classList.remove('circle')
        }else {
            box1.classList.add('circle')
        }
    }


function changeColor2() {
    console.log('click is working')

    if (box2.classList.contains('orange')) {
        box2.classList.remove('orange')
        box2.classList.add('blue')
    }else {
        box2.classList.remove('blue')
        box2.classList.add('orange')

    }
}


function changeColor3() {
    console.log('click is working')

    if (box3.classList.contains('circle')) {
        box3.classList.remove('circle')
        box3.classList.remove('orange')
        box3.classList.add('green')
    }else {
        box3.classList.add('circle')
        box3.classList.remove('green')
        box3.classList.add('orange')
    }
}