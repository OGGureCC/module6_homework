function is_prime(num) {
  if (num < 2 || num > 1000) {
    return "Данные неверны!";
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return `${num} - составное число`;
    }
  }
  return `${num} - простое число`;
}

console.log(is_prime(0));
console.log(is_prime(1));
console.log(is_prime(1010));
console.log(is_prime(2));
console.log(is_prime(10));
console.log(is_prime(19));
