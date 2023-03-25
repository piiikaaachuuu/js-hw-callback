// TODO: Напишіть функцію, яка приймає масив об'єктів, які містять ім'я та вік користувачів, і повертає масив об'єктів тільки з користувачами, вік яких менше за 32 років. Масив виводимо в консоль за допомогою callback

function filerAge(obj, value, callback) {
  const filterAgeMore = obj.filter((user) => user.age < value);
  callback(filterAgeMore);
}
function callbackFn(res) {
  console.table(res);
}

const value = 32;
const obj = [
  { name: "Nik", age: 23 },
  { name: "Oleg", age: 35 },
  { name: "Olga", age: 21 },
  { name: "Roma", age: 48 },
  { name: "Pasha😉", age: 30 },
];
filerAge(obj, value, callbackFn);
