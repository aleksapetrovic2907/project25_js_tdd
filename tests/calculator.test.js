const { add, subtract, multiply, divide } = require("../scripts/calculator.js");

test("Adds two numbers", () => {
  expect(add(2, 5)).toBe(7);
});

test("Subtracts two numbers", () => {
  expect(subtract(2, 5)).toBe(-3);
});

test("Multiplies two numbers", () => {
  expect(multiply(2, 5)).toBe(10);
});

test("Divides two numbers if second number is not zero", () => {
  expect(divide(25, 5)).toBe(5);
});

test("Returns NaN if second number in division is zero", () => {
  expect(divide(25, 0)).toBe(NaN);
});
