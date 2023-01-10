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
        let num1 = num;
        let result = "FizzBuzz";

        for (let i = 1; i <= num1; i++){
            if(this.isFizzBuzz(i)){
                result = result + " FizzBuzz";
            }
            else if(this.isFizz(i)){
                result = result + " Fizz";
            }
            else if(this.isBuzz(i)){
                result = result + " Buzz";
            }
            else{result = result + " " + i }
            }


            return result;
        }
    
  }
  