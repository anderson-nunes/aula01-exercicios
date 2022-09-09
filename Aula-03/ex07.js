const leitor = require("readline-sync");

let array1 = [2, 4, 3, 6, 8];

let array2 = [2, 4, 3, 6, 8];

let iguais = true;

for (let i = 0; i < array1.length; i++) {
  if (array1[i] != array2[i]) {
    iguais = false;
  }
}

if (iguais == true) {
  console.log("Arrays iguais");
} else {
  console.log("Arrays diferentes");
}
