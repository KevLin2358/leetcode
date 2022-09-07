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
