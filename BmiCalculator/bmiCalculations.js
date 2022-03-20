const calculateBmi = (height, weight) => {
  return weight / Math.pow(height, 2);
};

const getBmi = (height, weight) => {
  if (isNaN(height) || isNaN(weight)) {
    return "Invalid inputs";
  }
  return calculateBmi(height, weight);
};

module.exports = { getBmi };
