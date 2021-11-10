const fibonacci = function (num) {
  if (num < 0) return "OOPS";
  num = +num;
  if (!num) return;
  let a = 1;
  let b = 1;
  let res = 1;
  for (let i = 3; i <= num; i++) {
    res = a + b;
    a = b;
    b = res;
  }
  return res;
};

// Do not edit below this line
module.exports = fibonacci;
