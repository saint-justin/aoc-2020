const part1 = (input) => {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (input[i] + input[j] === 2020) {
        return `${input[i] * input[j]}`;
      }
    }
  }

  return 'No solution found';
};

const part2 = (nums) => {
  const sorted = nums.sort((a, b) => b - a);

  for (let i = 0; i < sorted.length; i++) {
    for (let j = 0; j < sorted.length; j++) {
      if (sorted[i] + sorted[j] < 2020 && sorted[i] + sorted[j] > 0) {
        const remainder = 2020 - (sorted[i] + sorted[j]);
        if (sorted.includes(remainder)) {
          return `${sorted[i] * sorted[j] * remainder}`;
        }
      }
    }
  }

  return 'No solution found';
};

module.exports = {
  part1,
  part2,
};
