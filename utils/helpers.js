export function getDefaultArrayOfNumbers() {
  const result = [];

  for (let i = 1; i <= 100; i++) {
    result.push(i);
  }

  return result;
}

export function getDefaultArrayOfOperations() {
  function isOdd(number) {
    if (number % 2 !== 0) console.log("odd");
  }

  function isDivisibleBySeven(number) {
    if (number % 7 === 0) console.log("seven");
  }

  return [isDivisibleBySeven, isOdd];
}

export function isInteger(input) {
  return Number.isInteger(input);
}

export function isFunction(input) {
  return typeof input === "function";
}

export function isListOfIntegers(inputList) {
  for (let i = 0; i < inputList.length; i++) {
    if (!isInteger(inputList[i])) {
      return false;
    }
  }
  return true;
}

export function isListOfOperations(inputList) {
  for (let i = 0; i < inputList.length; i++) {
    if (!isFunction(inputList[i])) {
      return false;
    }
  }
  return true;
}
