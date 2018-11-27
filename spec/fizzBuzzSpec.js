describe('Fizzbuzz', function() {

  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();

  });

  describe('knows when a number is', function() {
    it('divisible by 3', function() {
      expect(fizzbuzz._isDivisibleBy(3, 3)).toBe(true);
    });

    it('divisible by 5', function() {
      expect(fizzbuzz._isDivisibleBy(5, 5)).toBe(true);
    });

    it('divisible by 15', function() {
      expect(fizzbuzz._isDivisibleBy(15, 15)).toBe(true);
    });

  });

  describe('knows when a number is NOT', function() {

    it('divisible by 3', function() {
      expect(fizzbuzz._isDivisibleBy(1, 3)).toBe(false);
    });

    it('divisible by 5', function() {
      expect(fizzbuzz._isDivisibleBy(1, 5)).toBe(false);
    });

    it('divisible by 15', function() {
      expect(fizzbuzz._isDivisibleBy(1, 15)).toBe(false);
    });

  });

  describe('when playing, says', function() {

    it('"Fizz" when a number is divisible by 3', function() {
      expect(fizzbuzz.says(3)).toEqual("Fizz");
    });

    it('"Buzz" when a number is divisible by 5', function() {
      expect(fizzbuzz.says(5)).toEqual("Buzz");
    });

    it('"Fizzbuzz" when a number is divisible by 15', function () {
      expect(fizzbuzz.says(15)).toEqual("Fizzbuzz");
    });

  });

});
