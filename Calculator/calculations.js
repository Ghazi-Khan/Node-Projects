const add = (num1, num2) => {
  if (isNaN(num1) || isNaN(num2)) {
    return "Invalid numbers";
  }
  return num1 + num2;
};

module.exports = { add };
