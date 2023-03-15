// Пример получения CSS свойств из элемента

// 1) Получаем сам элемент
const node = document.querySelector("#test");

// 2) Получаем объект всех его стилей
const styles = window.getComputedStyle(node);

// 3) Достаем нужный стиль
const paddingLeft = parseInt(styles.paddingLeft);

