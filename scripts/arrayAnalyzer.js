const arrayAnalyzer = {
  average: (array) => {
      let sum = 0.0;
      array.forEach(element => {
          sum += element;
      });

      return sum / array.length;
  },

  min: (array) => {
    return Math.min(...array);
  },

  max: (array) => {
    return Math.max(...array);
  },

  length: (array) => {
    return array.length;
  },
};

module.exports = arrayAnalyzer;
