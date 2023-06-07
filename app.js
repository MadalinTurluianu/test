import { Exercise } from "./main/oop.js";
import { routineOverListOfNumbers } from "./main/functional.js";
import {
  getDefaultArrayOfNumbers,
  getDefaultArrayOfOperations,
} from "./utils/helpers.js";

const A = getDefaultArrayOfNumbers();
const operations = getDefaultArrayOfOperations();

console.log("\nOOP approach\n");

const oopSolution = new Exercise(A, operations);
oopSolution.applyRoutine();

console.log("\nFunctional approach\n");
routineOverListOfNumbers(A, operations);
