import { getDefaultArrayOfNumbers } from "../utils/helpers.js";

export const TestResult = {
  failed: "FAILED",
  passed: "PASSED",
};

function goodOperation1(input) {
  if (input % 2 !== 0) return true;
  return false;
}

function badOperation1(input) {
  input();
}

export const GoodOperations = [goodOperation1];
export const BadOperations1 = [badOperation1];
export const BadOperations2 = [false, 2, "hi"];
export const GoodNumbers = getDefaultArrayOfNumbers();
export const BadNumbers1 = [1.3, 4.1, 4, 1.5];
export const BadNumbers2 = ["23", "hi", "I don't think I should be here :)"];
