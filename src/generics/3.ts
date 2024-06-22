function merge<T extends object, U extends object>(objA: T, objB: U): any {
  return Object.assign(objA, objB);
}


