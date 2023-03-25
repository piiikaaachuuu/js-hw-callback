// TODO: Напишіть функцію, яка приймає масив чисел та повертає суму всіх чисел, які більші за 5. Суму всіх чисел виводимо в консоль через callback

function increasing(nums, value, callback) {
  let sum = 0;
  const filterIncreasing = nums.filter((num) => num > value);
  filterIncreasing.forEach(function (elem) {
    sum += elem;
  });
  callback(sum);
}
function callbackFn(res) {
  console.log(res); //35
}

const value = 5;
const arr = [23, 3, 12, 4, 1];
increasing(arr, value, callbackFn);
