const numbers = [2.10,7.90,3.0,5.70,5.20,1.20,8.60,4.0,7.30];
let sum = 0;
let total = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("sum: " + sum);

const mean = sum / numbers.length;
console.log("mean: " + mean);

for (let i = 0; i < numbers.length; i++) {
  total += Math.abs(numbers[i] - mean);
}
console.log("total: " + total);

const mad = total / numbers.length;
console.log("mad: " + mad);
