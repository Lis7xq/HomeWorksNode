////Задача 1
//створюємо функцію add яка приймає параметр num і повертає функцію inneradd()
function add(num) {
  // Локальна змінна sum ініціалізується з параметром num
  let sum = num;
  // Функція innerAdd () додає наступні значення до sum та повертає саму себе, поки не отримає undefined
  function innerAdd(nextNum) {
    // Якщо nextNum дорівнює undefined, функція повертає поточний сумарний результат
    if (nextNum === undefined) {
      return sum;
    }
    //// Якщо nextNum не дорівнює undefined, два сусідні числа додаються та функція повертає сама собі суму сусідніх чисел
    sum += nextNum;
    return innerAdd;
  }
  //Виклик функції innerAdd()
  return innerAdd;
}
console.log(add(2)(5)(7)(1)(6)(5)(10)());

///Задача 2
const userInfo = {
  name: "Vasya",
  age: 30,
  "likes js": true,
};
console.log(userInfo, "like js");
