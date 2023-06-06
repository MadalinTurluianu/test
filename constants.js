export const Errors = {
  integersListOnly: new Error("The list must contain only integers"),
  functionsListOnly: new Error("The list must contain only functions"),
  integersOnly: new Error("The input must be an integer"),
  functionsOnly: new Error("The input must be a function"),
  operationError: new Error(
    "The applied operation has an error, be sure each operation accept only integers as an argument"
  ),
};
