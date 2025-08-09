class Solution {
  gcd(a, b) {
    const gcdA = [];
    for (let i = 1; i <= a; i++) {
      if (a % i === 0) gcdA.push(i);
    }

    const gcdB = [];
    for (let i = 0; i <= b; i++) {
      if (b % i === 0) gcdB.push(i);
    }

    const common = gcdA.filter((num) => gcdB.includes(num));
    return common[common.length - 1];
  }

  // Optimise Slightly
  gcdOptimise(a, b) {
    let gcdVal = 1;
    const limit = Math.min(a, b);

    for (let i = 1; i <= limit; i++) {
      if (a % i === 0 && b % i === 0) {
        gcdVal = i;
      }
    }

    return gcdVal;
  }

  gcdEuclids(a, b) {
    while(b !== 0) {
        [a, b] = [b, a % b]
    }

    return a;
  }
}

const sol = new Solution();
const test1 = sol.gcd(60, 36);
console.log(test1);
const test2 = sol.gcdOptimise(60, 36);
console.log(test2)
const test3 = sol.gcdEuclids(60, 36);
console.log(test3)


