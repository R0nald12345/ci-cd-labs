const { add, subtract, multiply, divide } = require("../app/calculator");

describe("Calculator", () => {
  test("add: 2 + 3 should be 5", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("subtract: 10 - 4 should be 6", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("multiply: 3 * 4 should be 12", () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test("divide: 10 / 2 should be 5", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("divide: division by zero should throw", () => {
    expect(() => divide(10, 0)).toThrow("Division by zero");
  });
});
