const OPEN_BRACKETS = ["(", "{", "[", "|", "1", "3", "5", "7", "8"];
const BRACKETS_PAIR = {
  [")"]: "(",
  ["}"]: "{",
  ["]"]: "[",
  ["|"]: "|",
  ["2"]: "1",
  ["4"]: "3",
  ["6"]: "5",
  ["7"]: "7",
  ["8"]: "8",
};

module.exports = function check(str, bracketsConfig) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    if (
      stack.length > 0 &&
      BRACKETS_PAIR[currentSymbol] === stack[stack.length - 1]
    ) {
      stack.pop();
    } else if (OPEN_BRACKETS.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else {
      if (stack.length === 0) {
        return false;
      }
      let topElement = stack[stack.length - 1];
      if (BRACKETS_PAIR[currentSymbol] === topElement) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
