import { add, subtract, multiply, divide } from "./index.js";

//add

test("returns 5 if called with add(2, 3)", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

test("returns a negative value if the greater argument is negative", () => {
  expect(add(-5, 3)).toBeLessThan(0);
});

test("returns a value close to 0.3 if called with add(0.1, 0.2)", () => {
  expect(add(0.1, 0.2)).toBeCloseTo(0.3);
});

//subtract

test("returns 10 if called with subtract(15, 5)", () => {
  const result = subtract(2, 5);
  expect(result).toBeLessThan(0);
});

test("returns a negative value if the second argument is greater than the first one", () => {
  expect(subtract(5, 10)).toBeLessThan(0);
});

//Multiply

test("returns 8 if called with multiply(2, 4)", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});

test("returns a negative value if only the first argument is negative", () => {
  expect(multiply(-2, 4)).toBeLessThan(0);
});

test("returns a negative value if only the second argument is negative", () => {
  expect(multiply(2, -4)).toBeLessThan(0);
});

test("returns a positive value if called with two negative arguments", () => {
  expect(multiply(-2, -4)).toBeGreaterThan(0);
});

//divide

test("returns 3 if called with divide(9, 3)", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});

test('returns "You should not do this!" if called with 0 as the second argument', () => {
  expect(divide(9, 0)).toBe("You should not do this!");
});
