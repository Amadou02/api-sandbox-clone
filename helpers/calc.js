exports.sum = function (a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw new Error('les valeurs fournies doivent être des nombres');
  }
  return a + b;
};
