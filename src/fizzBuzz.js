var Fizzbuzz = function () {};


Fizzbuzz.prototype.says = function(number) {
  if (this._isDivisibleBy(number, 15)) {
    return "Fizzbuzz";
  }
  if (this._isDivisibleBy(number, 3)) {
    return "Fizz";
  }
  if (this._isDivisibleBy(number, 5)) {
    return "Buzz";
  }
  return number
}

Fizzbuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0)
}

var fizzbuzz = new Fizzbuzz();


var number
for (number = 1; number < 21; number++) {
  console.log(fizzbuzz.says(number))

}
