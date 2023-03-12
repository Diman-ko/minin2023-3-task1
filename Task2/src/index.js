const content = document.querySelector('#content')

const techForm = [
    {type: 'js', title: 'Выучить JavaScript', dicription: 'js-text', done: false},
    {type: 'git', title: 'Попрактиковаться с Git', dicription: 'git-text', done: false },
    {type: 'react', title: 'Изучить React', dicription: 'react-text', done: false },
    {type: 'nod', title: 'Понять NodeJS', dicription: 'nod-text', done: false },
    {type: 'job', title: 'Устроиться на работу', dicription: 'job-text', done: false },
]

// const techForm = []

console.log(techForm)

function init() {
if (techForm.length === 0) {
 content.innerHTML = '<p class="empty">Empty. Add new</p>'
} else {

 let html = ''
 for (let i = 0; i < techForm.length; i++) {
  const tech = techForm[i]
  html += toCard(tech)
 }
 content.innerHTML = html
}
}

function toCard(tech) {

/*    let doneClass = ''
if (tech.done) {
    doneClass = 'checked'
} else {
    doneClass = ''
}*/

const doneClass = tech.done ?  'checked' : ''
    return `
    <li class="">
        <label data-type="${tech.type}">
            <input type="checkbox" ${doneClass}/> ${tech.title}
        </label>
      </li>
    `

}


init()