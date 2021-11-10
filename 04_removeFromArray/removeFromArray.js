const removeFromArray = function (arr, ...elements) {
  for (e of elements) {
    let index = arr.indexOf(e);
    if (index == -1) continue;
    arr.splice(index, 1);
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
