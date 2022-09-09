const leitor = require("readline-sync");

let array1 = [];

let array2 = [];

for (let i = 0; i < 5; i++) {
  array1.push(Math.floor(Math.random() * 10));
  array2.push(Math.floor(Math.random() * 10));
}

let array3 = [];

for (let i = 0; i < 5; i++) {
  array3[i] = array1[i] - array2[i];
}

let array4 = [];

for (let i = 0; i < 5; i++) {
  array4[i] = array1[i] + array2[i];
}

let array5 = [];

for (let i = 0; i < 5; i++) {
  array5[i] = array1[i] * array2[i];
}

console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);
console.log(array5);
