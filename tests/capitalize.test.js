const capitalize = require("../scripts/capitalize.js");

test("Returns capitalized string", () => {
  expect(capitalize("belgrade")).toBe("Belgrade");
});
