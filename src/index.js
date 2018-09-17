module.exports = function check(str, bracketsConfig) {
  let sequence = {};
  for (let i in bracketsConfig) {
    sequence[bracketsConfig[i][1]] = bracketsConfig[i].join("");
  }
  let copyStr = str;
  for (let i = 0; i < str.length; i++) {
    copyStr = copyStr.replace(sequence[str[i]], "");
  }
  if (copyStr.length !== 0) {
    return false;
  }
  else{
    return true;
  }
}
