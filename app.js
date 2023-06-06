import { Exercise } from "./oop.js";
import {
  getDefaultArrayOfNumbers,
  getDefaultArrayOfOperations,
} from "./helpers.js";

const A = getDefaultArrayOfNumbers();
const operations = getDefaultArrayOfOperations();

const oopSolution = new Exercise(A, operations);

oopSolution.applyRoutine()

