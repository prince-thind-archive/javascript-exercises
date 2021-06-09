const sumAll = function (num1, num2) {
  if (typeof num1 != "number" || typeof num2 != "number") return "ERROR";
  if (num1<0 || num2<0) return "ERROR";
  
  if (num1 > num2) {
    [num1, num2] = [num2, num1];
  }

  let arr = [];
  let sum = 0;
  for (let i = num1; i <= num2; i++) {
    arr.push(i);
  }
  for (e of arr) {
    sum += e;
  }
  return sum;
};

module.exports = sumAll;
