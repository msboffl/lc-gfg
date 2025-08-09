class Solution {
  gcdOfArray(arr) {
    let gcdVal = 1;
    const min = Math.min(...arr);
    
    for(let i = 1; i <= min; i++) {
        let divisCount = 0;
        
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] % i === 0) divisCount++
        }

        if(divisCount === arr.length) {
            gcdVal = i
        }
    }

    return gcdVal
  }
}

const arr = [2, 5, 6, 9, 10];
const sol = new Solution();
console.log(sol.gcdOfArray(arr));


console.log([0] + arr + [0])