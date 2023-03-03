function countOddEven(array) {
  let even, odd, zero, err;
  even = 0;
  odd = 0;
  zero = 0;
  err = 0;
  for (i = 0; i < array.length; i++) {
    if (typeof array[i] == "number" && !isNaN(array[i])) {
      if (array[i] == 0) {
        zero += 1;
      } else if (array[i] % 2 == 0) {
        even += 1;
      } else {
        odd += 1;
      }
    } else {
      err += 1;
    }
  }
  return `Кол-во четных чисел - ${even}, кол-во нечетных чисел - ${odd}
${zero > 0 ? `Кол-во нулей - ${zero}` : ""}
${err > 0 ? `Кол-во ошибок - ${err}` : ""}`;
}

let list1 = [0, 1, 2, 3, "", NaN, null];
let list2 = [1, 2, 3, 4, "", NaN, null];
let list3 = [0, 2, 3, 4];

console.log(countOddEven(list1));
console.log(countOddEven(list2));
console.log(countOddEven(list3));
