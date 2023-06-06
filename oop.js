import {
  isListOfIntegers,
  isListOfOperations,
  isInteger,
  isFunction,
} from "./helpers.js";
import { Errors } from "./constants.js";
import { routineOverListOfNumbers } from "./functional.js";

export class Exercise {
  constructor(listOfNumbers, listOfOperations) {
    if (!isListOfIntegers(listOfNumbers)) {
      throw Errors.integersListOnly;
    }

    if (!isListOfOperations(listOfOperations)) {
      throw Errors.functionsListOnly;
    }

    this.listOfNumbers = listOfNumbers;
    this.listOfOperations = listOfOperations;
  }

  listOfNumbers = [];
  listOfOperations = [];

  set listOfNumbers(inputList) {
    if (!isListOfIntegers(inputList)) {
      throw Errors.integersListOnly;
    }
    this.listOfNumbers = [...inputList];
  }

  set listOfOperations(inputList) {
    if (!isListOfOperations(inputList)) {
      throw Errors.functionsListOnly;
    }
    this.listOfOperations = [...inputList];
  }

  addInteger = (input) => {
    if (!isInteger(input)) {
      throw Errors.integersOnly;
    }
    this.listOfNumbers.push(input);
  };

  addOperation = (input) => {
    if (!isFunction(input)) {
      throw Errors.functionsOnly;
    }
    this.listOfOperations.push(input);
  };

  applyRoutine = () => {
    routineOverListOfNumbers(this.listOfNumbers, this.listOfOperations);
  };
}
