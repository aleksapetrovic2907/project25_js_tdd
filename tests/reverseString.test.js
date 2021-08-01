const reverseString = require("../scripts/reverseString.js");

test("Returns reversed string", () => {
  expect(reverseString("hello")).toBe("olleh");
});
