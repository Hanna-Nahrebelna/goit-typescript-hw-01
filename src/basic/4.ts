function showMessage(message: string): void {
  console.log(message);
}

type CallbackType = (num1: number, num2: number) => number;
function calc(param1: number, param2: number, callback: CallbackType): void {
  console.log('Result:', callback(param1, param2));
}

function customError(message: string): never {
  throw new Error(message);
}