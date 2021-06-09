const ftoc = function (F) {
  let C = (F - 32) * 0.5556;
  C = C.toFixed(1);
  C = +C;
  return C;
};

const ctof = function (C) {
  let F = C * 1.8 + 32;
  F = F.toFixed(1);
  F = +F;
  return F;
};

module.exports = {
  ftoc,
  ctof,
};
