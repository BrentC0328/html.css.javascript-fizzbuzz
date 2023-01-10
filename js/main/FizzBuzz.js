class FizzBuzz {
    constructor(fizz, buzz) {
      this.fizz = fizz;
      this.buzz = buzz;
    }
  
    isFizz(num) {
        if(num % 3 == 0){
            return true;
        }
        return false;
    }
  
    isBuzz(num) {
        if(num % 5 == 0){
            return true;
        }
        return false;
    }
  
    isFizzBuzz(num) {
        if(this.isFizz(num) && this.isBuzz(num)){
                return true;
    }
    return false;
}
  
    getOutput(num) {
        return num;
    }
  }
  