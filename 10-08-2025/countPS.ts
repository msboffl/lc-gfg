class Solution {
  // Brute Force
  countPSBrute(s: string): number {
    const n = s.length;
    let count = 0;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j <= n; j++) {
        let sub = s.substring(i, j);
        if (sub.length > 1) {
          let left = 0;
          let right = sub.length - 1;
          while (left < right) {
            if (sub[left] !== sub[right]) break;
            left++;
            right--;
          }

          if (left >= right) count++;
        }
      }
    }
    return count;
  }

  countPSOptimise(s: string): number {
    const n = s.length;
    let count = 0;

    function expandFromCenter(left: number, right: number): number {
      let res = 0;
      while (left >= 0 && right < n && s[left] === s[right]) {
        res++;
        left--;
        right++;
      }
      return res;
    }

    for (let i = 0; i < n; i++) {
      count += expandFromCenter(i, i);
      count += expandFromCenter(i, i + 1);
    }

    return count - n;
  }
}

const sol = new Solution();
//Brute Force
console.log(sol.countPSBrute("abc"));
console.log(sol.countPSBrute("aaa"));
console.log(sol.countPSBrute("abaab"));
console.log(sol.countPSBrute("abbaeae"));

console.log("===============");
//Optimise
console.log(sol.countPSOptimise("abc"));
console.log(sol.countPSOptimise("aaa"));
console.log(sol.countPSOptimise("abaab"));
console.log(sol.countPSOptimise("abbaeae"));
