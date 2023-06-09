import { Errors } from "../utils/constants.js";
import { isListOfIntegers, isListOfOperations } from "../utils/helpers.js";

export function routineOverListOfNumbers(listOfNumbers, listOfOperations) {
  if (!isListOfOperations(listOfOperations)) throw Errors.functionsListOnly;
  if (!isListOfIntegers(listOfNumbers)) throw Errors.integersListOnly;

  listOfNumbers.forEach((number) => {
    listOfOperations.forEach((operation) => {
      try {
        operation(number);
      } catch {
        throw Errors.operationError;
      }
    });
  });
}
