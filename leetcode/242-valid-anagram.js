// revisited
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    let pop1 = populate(s);
    let pop2 = populate(t);

    for (let key in pop1) {
      if (pop2[key] !== pop1[key]) return false;
    }

    return true;
};

const populate = (string) => {
    let obj = {};

    for (let char of string) {
        if (obj[char]) obj[char]++;
        else obj[char] = 1;
    }

    return obj;
}

var isAnagram = function (s, t) {
  let word1 = s.split("").sort().join("");
  let word2 = t.split("").sort().join("");

  let result = word1 === word2 ? true : false;
  return result;
};

var isAnagram2 = function (s, t) {
  if (s.length !== t.length) return false;

  let hash = {};
  let hash2 = {};

  for (let i = 0; i < s.length; i++) {
    if (!hash[s[i]]) hash[s[i]] = 1;
    else hash[s[i]] = hash[s[i]] + 1;

    if (!hash2[t[i]]) hash2[t[i]] = 1;
    else hash2[t[i]] = hash2[t[i]] + 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] !== hash2[s[i]]) return false;
  }
  return true;
};


var isAnagram3 = function(s, t) {
    let objS = populateObj(s)
    let objT = populateObj(t)

    for (let char in objS) {
        if(objS[char] !== objT[char]) return false
    }

    for (let char in objT) {
        if(objS[char] !== objT[char]) return false
    }

    return true
};

function populateObj(word) {
    let obj = {}

    for (let i = 0; i < word.length; i++) {
        let char = word[i]
        if (obj[char]) obj[char] += 1
        else obj[char] = 1
    }

    return obj
}