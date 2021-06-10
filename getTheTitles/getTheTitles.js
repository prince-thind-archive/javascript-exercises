const getTheTitles = function (arr) {
  let res = [];
  for (obj of arr) {
    res.push(obj.title);
  }
  return res;
};

module.exports = getTheTitles;
