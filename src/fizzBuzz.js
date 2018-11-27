var Fizzbuzz = function () {};


Fizzbuzz.prototype.says = function(number) {
  if (this._isDivisibleBy(number, 15)) {
    return "Fizzbuzz";
  } else if (this._isDivisibleBy(number, 3)) {
    return "Fizz";
  } else if (this._isDivisibleBy(number, 5)) {
    return "Buzz";
  } else {
    return number
  }
}

Fizzbuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0)
}

var fizzbuzz = new Fizzbuzz();

var number
for (number = 1; number < 21; number++) {
  console.log(fizzbuzz.says(number));
}
