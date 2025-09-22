import { sum } from "../sum";

test("Sum function cal sum of 2 nos ", () => {
  const result = sum(4, 3);

  expect(result).toBe(7); // Assertion
});
