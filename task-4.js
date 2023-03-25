// TODO: Напишіть функцію, яка приймає два масиви і callback-функцію для обробки цих масивів. Функція має повернути новий масив, який містить всі елементи з обох масивів, відсортованих за зростанням.

function filterArrs(arr1, arr2, callback) {
  const arrs = arr1.concat(arr2);
  arrs.sort((a, b) => a - b);
  callback(arrs);
}
function callbackFn(res) {
  console.log(res);
}

const arr1 = [23, 3, 12, 4, 1];
const arr2 = [26, 17, 10, 9, 19];
filterArrs(arr1, arr2, callbackFn);
