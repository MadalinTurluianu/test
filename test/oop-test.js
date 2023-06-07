import {
  BadNumbers1,
  BadOperations2,
  GoodNumbers,
  GoodOperations,
  TestResult,
} from "./test-constants.js";
import { Exercise } from "../main/oop.js";

const tests = [
  function test1() {
    let result = TestResult.passed;
    let itWorked = false;
    try {
      const numbers = [1, 2];
      const operations = [
        () => {
          itWorked = true;
        },
      ];
      const exercise = new Exercise(numbers, operations);
      exercise.applyRoutine();

      if (exercise.listOfNumbers[0] === numbers[0] && itWorked) {
        result = TestResult.passed;
      }
    } catch {
      result = TestResult.failed;
    }
    console.log(
      `(1) ${result}: Create a class with valid input [the created object listOfNumbers content should be the same as numbers and the operation should change itWorked]`
    );
  },

  function test2() {
    let result = TestResult.failed;
    try {
      new Exercise(BadNumbers1, GoodOperations);
    } catch {
      result = TestResult.passed;
    }
    console.log(
      `(2) ${result}: Create a class with invalid input (invalid numbers) [should throw an error]`
    );
  },

  function test3() {
    let result = TestResult.failed;
    try {
      new Exercise(GoodNumbers, BadOperations2);
    } catch {
      result = TestResult.passed;
    }
    console.log(
      `(3) ${result}: Create a class with invalid input (invalid operations) [should throw an error]`
    );
  },

  function test4() {
    let result = TestResult.failed;
    let string = "";
    try {
      const exercise = new Exercise(
        [1],
        [
          (n) => {
            string += n;
          },
        ]
      );
      exercise.applyRoutine();
      exercise.addOperation((n) => {
        string += 2 * n;
      });
      exercise.applyRoutine();

      if (string === "112") result = TestResult.passed;
    } catch {
      result = TestResult.failed;
    }
    console.log(`(4) ${result}: Add an operation [string should be 112]`);
  },

  function test5() {
    let result = TestResult.failed;
    let string = "";
    try {
      const exercise = new Exercise(
        [1],
        [
          (n) => {
            string += n;
          },
        ]
      );
      exercise.applyRoutine();
      exercise.addInteger(2);
      exercise.applyRoutine();

      if (string === "112") result = TestResult.passed;
    } catch {
      result = TestResult.failed;
    }
    console.log(`(5) ${result}: Add an integer [string should be 112]`);
  },

  function test6() {
    let result = TestResult.failed;
    try {
      const exercise = new Exercise(GoodNumbers, GoodOperations);
      exercise.addInteger("hi");
    } catch {
      result = TestResult.passed;
    }
    console.log(`(6) ${result}: Add invalid integer [should throw an error]`);
  },

  function test7() {
    let result = TestResult.failed;
    try {
      const exercise = new Exercise(GoodNumbers, GoodOperations);
      exercise.addOperation("hi");
    } catch {
      result = TestResult.passed;
    }
    console.log(`(7) ${result}: Add invalid operation [should throw an error]`);
  },
];

export function oopTests() {
  console.log("\nOOP tests:\n");
  tests.forEach((test) => {
    test();
  });
}
