import { routineOverListOfNumbers } from "./functional.js";
import {
  BadNumbers1,
  BadNumbers2,
  BadOperations1,
  BadOperations2,
  GoodNumbers,
  GoodOperations,
  TestResult,
} from "./test-constants.js";

const tests = [
  function test1() {
    let result = TestResult.passed;
    try {
      routineOverListOfNumbers(GoodNumbers, GoodOperations);
    } catch {
      result = TestResult.failed;
    }
    console.log(`(1) ${result}: Default test with valid inputs`);
  },

  function test2() {
    let result = TestResult.failed;
    try {
      routineOverListOfNumbers(BadNumbers1, GoodOperations);
    } catch {
      result = TestResult.passed;
    }
    console.log(
      `(2) ${result}: Do not contain only integers (it has floats instead) [should throw an error]`
    );
  },

  function test3() {
    let result = TestResult.failed;
    try {
      routineOverListOfNumbers(BadNumbers2, GoodOperations);
    } catch {
      result = TestResult.passed;
    }
    console.log(
      `(3) ${result}: Do not contain only integers (it has strings instead) [should throw an error]`
    );
  },

  function test4() {
    let result = TestResult.failed;
    try {
      routineOverListOfNumbers(GoodNumbers, BadOperations1);
    } catch {
      result = TestResult.passed;
    }
    console.log(`(4) ${result}: Invalid operation [should throw an error]`);
  },

  function test4() {
    let result = TestResult.failed;
    try {
      routineOverListOfNumbers(GoodNumbers, BadOperations1);
    } catch {
      result = TestResult.passed;
    }
    console.log(
      `(4) ${result}: Invalid operation (unexpected function behavior) [should throw an error]`
    );
  },

  function test5() {
    let result = TestResult.failed;
    try {
      routineOverListOfNumbers(GoodNumbers, BadOperations2);
    } catch {
      result = TestResult.passed;
    }
    console.log(
      `(5) ${result}: Invalid operation (array contain non-function values) [should throw an error]`
    );
  },

  function test6() {
    let result = TestResult.failed;
    let counter = 0;
    try {
      routineOverListOfNumbers(
        [1],
        [
          () => {
            counter++;
          },
          () => {
            counter++;
          },
        ]
      );
      if (counter > 1) result = TestResult.passed;
    } catch {
      result = TestResult.failed;
    }
    console.log(
      `(6) ${result}: Multiple operations are applied on a single number [counter should be > 1]`
    );
  },
];

export function functionalTests() {
  console.log("\nFunctional tests:\n");
  tests.forEach((test) => {
    test();
  });
}
