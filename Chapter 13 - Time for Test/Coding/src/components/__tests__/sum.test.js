import { sum } from "../sum";

test("Sum function should take two numbers and calculate the sum ", () => {
  const result = sum(3, 4);

  //Assertion
  expect(result).toBe(7);
});
