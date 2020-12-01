const inputs = require('./inputs.js');
// const [day1] = inputs;

const splitInput = inputs.day1.split('\n').map(e => parseInt(e));

const solution = 0;
const solveDay1Part1 = (input) => {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (parseInt(input[i]) + parseInt(input[j]) === 2020) {
        console.log(`n1: ${input[i]} n2: ${input[j]}`);
        return `${input[i] * input[j]}`;
      }
    }
  }
};

const solveDay1Part2 = (nums) => {
  const sorted = nums.sort((a, b) => b - a);

  for (let i = 0; i < sorted.length; i++) {
    for (let j = 0; j < sorted.length; j++) {
      if (sorted[i] + sorted[j] < 2020 && sorted[i] + sorted[j] > 0) {
        const remainder = 2020 - (sorted[i] + sorted[j]);
        if (sorted.includes(remainder)) {
          // console.log(`${sorted[i]} ${sorted[j]} ${remainder}`);
          return `${sorted[i] * sorted[j] * remainder}`;
        }
      }
    }
  }
};

const solveDay1Part2Ian = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        const num1 = Number(arr[i]);
        const num2 = Number(arr[j]);
        const num3 = Number(arr[k]);
        if (num1 + num2 + num3 == 2020) {
          return (num1 * num2 * num3);
        }
      }
    }
  }
};

const jstart = Date.now();
console.log(`Justin Solution: ${solveDay1Part2(splitInput)}`);
console.log(`Justin's finished in ${Date.now() - jstart}ms`);

const istart = Date.now();
console.log(`Ian's Solution:  ${solveDay1Part2Ian(splitInput)}`);
console.log(`Ian's finished in ${Date.now() - istart}ms`);
