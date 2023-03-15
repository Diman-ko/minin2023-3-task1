// Пример получения CSS свойств из элемента

// 1) Получаем сам элемент
const node = document.querySelector("#test");


// 2) Получаем объект всех его стилей
const styles = window.getComputedStyle(node);

// 3) Достаем нужный стиль
const paddingLeft = parseInt(styles.paddingLeft);

console.log(styles.wordSpacing)  // 0px
console.log(styles.textAlign)  //  start
console.log(styles.color)  //  rgb(0, 0, 0)
console.log(paddingLeft) //  0
document.write('paddingLeft' + ' ' + paddingLeft)