function comparaArrays(array1, array2) {
  let iguais = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] != array2[i]) {
      iguais = false;
    }
  }
  return iguais;
}

let arrayA = [4, 6, 1, 2, 3];

let arrayB = [4, 6, 1, 2, 3];

// if (comparaArrays(arrayA, arrayB) == true) {
//   console.log("Arrays iguais");
// } else {
//   console.log("Arrays diferentes");
// }

comparaArrays(arrayA, arrayB) == true
  ? console.log("Arrays iguais")
  : console.log("Arrays diferentes");

// console.log(comparaArrays(arrayA, arrayB));
