// Expected output:
// add: 10
// subtract: 8
// multiply: 24
// divide: 12
// Result: 12
class Calculator {
  constructor() { this.value = 0; }
  add(number) { this.value += number; console.log('add:', this.value); return this; }
  subtract(number) { this.value -= number; console.log('subtract:', this.value); return this; }
  multiply(number) { this.value *= number; console.log('multiply:', this.value); return this; }
  divide(number) {
    if (number === 0) {
      console.error('Cannot divide by zero');
    } else {
      this.value /= number;
      console.log('divide:', this.value);
    }
    return this;
  }
  getResult() { console.log('Result:', this.value); return this.value; }
}

new Calculator().add(10).subtract(2).multiply(3).divide(2).getResult();
