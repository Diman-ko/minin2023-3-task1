const text =  document.querySelector('#test')

const styles = window.getComputedStyle(text)

const fontSize = parseInt(styles.fontSize)

console.log(fontSize)