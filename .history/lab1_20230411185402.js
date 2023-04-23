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

function isAnagram(str1, str2) {
  // видаляємо пробіли та перетворюємо рядки на масиви символів
  const arr1 = str1.replace(/\s/g, "").split("");
  const arr2 = str2.replace(/\s/g, "").split("");

  // якщо рядки не мають однакової довжини, то вони не можуть бути анаграмами
  if (arr1.length !== arr2.length) {
    return false;
  }

  // створюємо об'єкти, де ключі - символи рядків, а значення - кількість повторень символу у рядку
  const freq1 = arr1.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  const freq2 = arr2.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  // порівнюємо об'єкти
  for (const key in freq1) {
    if (freq1[key] !== freq2[key]) {
      return false;
    }
  }

  return true;
}

// Приклад використання:
console.log(isAnagram("listen", "silent")); // повинно повернути true
console.log(isAnagram("hello", "world")); // повинно повернути false
