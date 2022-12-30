class IsFizzBuzzTest {
    constructor() {
      this.fizzBuzz = new FizzBuzz(3, 5);
    }
  
    testPositiveFizzBuzz() {
      const expectedOutput = true;
      const input = 15;
      const result = this.fizzBuzz.isFizzBuzz(input);
      if (expectedOutput !== result)
        throw new Error(`Test case failed: expected ${expectedOutput} but got ${result}`);
    }
  
    testNegativeFizzBuzz() {
      const expectedOutput = false;
      const input = 16;
      const result = this.fizzBuzz.isFizzBuzz(input);
      if (expectedOutput !== result)
        throw new Error(`Test case failed: expected ${expectedOutput} but got ${result}`);
    }
  
    testEdgeCaseFizzBuzz() {
      const expectedOutput = false;
      const input = 0;
      const result = this.fizzBuzz.isFizzBuzz(input);
      if (expectedOutput !== result)
        throw new Error(`Test case failed: expected ${expectedOutput} but got ${result}`);
    }
  }
  
  const fizzBuzzTest = new FizzBuzzTest();
  fizzBuzzTest.testPositiveFizzBuzz();
  fizzBuzzTest.testNegativeFizzBuzz();
  fizzBuzzTest.testEdgeCaseFizzBuzz();
  