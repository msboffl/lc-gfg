function countBalanced(strArr) {
    let count = 0;
    for (let i = 0; i < strArr.length; i++) {
        let concat = "";
        for (let j = i; j < strArr.length; j++) {
            concat += strArr[j];
            let ovwels = 0;
            let consonants = 0;
            for (let char of concat) {
                if (/[a-z]/.test(char)) {
                    if (isVowel(char)) {
                        ovwels++;
                    }
                    else {
                        consonants++;
                    }
                }
            }
            if (ovwels === consonants)
                count++;
        }
    }
    function isVowel(char) {
        return "aeiou".includes(char);
    }
    return count;
}
function countBalancedOpt(strArr) {
    function countVC(str) {
        let vowels = 0, consonants = 0;
        for (const ch of str) {
            if (/[a-z]/.test(ch)) {
                if ("aeiou".includes(ch))
                    vowels++;
                else
                    consonants++;
            }
        }
        return [vowels, consonants];
    }
    let count = 0;
    let balance = 0;
    const balancedMap = new Map();
    balancedMap.set(0, 1);
    let totalOwvels = 0;
    let totalConsonants = 0;
    for (const str of strArr) {
        const [v, c] = countVC(str);
        totalOwvels += v;
        totalConsonants += c;
        balance = totalOwvels - totalConsonants;
        if (balancedMap.has(balance)) {
            count += balancedMap.get(balance);
        }
        balancedMap.set(balance, (balancedMap.get(balance) || 0) + 1);
    }
    return count;
}
const strArr = ["aeio", "aa", "bc", "ot", "cdbd"];
console.log(countBalanced(strArr));
console.log(countBalancedOpt(strArr));
