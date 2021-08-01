const arrayAnalyzer = require("../scripts/arrayAnalyzer.js");

test("Returns the average of the array", () => {
  expect(arrayAnalyzer.average([2, 5, 8])).toBe(5);
});

test("Returns the maximum of the array", () => {
  expect(arrayAnalyzer.max([2, 5, 8])).toBe(8);
});

test("Returns the minimum of the array", () => {
  expect(arrayAnalyzer.min([2, 5, 8])).toBe(2);
});

test("Returns the length of the array", () => {
  expect(arrayAnalyzer.length([2, 5, 8])).toBe(3);
});
