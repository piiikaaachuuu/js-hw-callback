// TODO: Напишіть функцію, яка приймає об'єкт з ключами "name" та "age" та callback-функцію. Функція має повертати новий об'єкт, в якому значення ключа "name" буде перетворено в верхній регістр, а значення ключа "age" буде збільшено на 5.

function filterUsers(obj, callback) {
  let newObj = obj;
  newObj.forEach(function (userName) {
    userName.name = userName.name.toUpperCase();
  });
  newObj.forEach(function (userAge) {
    userAge.age = userAge.age + 5;
  });
  callback(newObj);
}
function callbackFn(res) {
  console.table(res);
}

const obj = [
  { name: "Nik", age: 23 },
  { name: "Oleg", age: 35 },
  { name: "Olga", age: 21 },
  { name: "Roma", age: 48 },
  { name: "Pasha😉", age: 30 },
];
filterUsers(obj, callbackFn);
