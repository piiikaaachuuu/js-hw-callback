// TODO: Напишіть функцію, яка приймає масив чисел та повертає новий масив, в якому кожне число збільшено на 1. Новий масив виведи в консоль за допомогою функції callback

function increaseByOne(nums, callback) {
  let increaseNums = [];
  nums.forEach(function (num) {
    increaseNums.push(num + 1);
  });
  callback(increaseNums);
}
function callbackFn(res) {
  console.log(res); //[24,34,13,46,2]
}

const nums = [23, 33, 12, 45, 1];
increaseByOne(nums, callbackFn);
