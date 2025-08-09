function mergeStrings(word1, word2) {
    let res = "";
    for(let i = 0; i < Math.max(word1.length, word2.length); i++) {
        if(i < word1.length) res += word1[i];
        if(i < word2.length) res += word2[i];
    }

    return res;
}


const word1 = "";
const word2 = "pqr";
console.log(mergeStrings(word1, word2))