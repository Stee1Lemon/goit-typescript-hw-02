/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/
type Obj = {
  [keyName: string]: any;
};

function merge<T extends Obj, K extends Obj>(objA: T, objB: K): T & K {
  return Object.assign(objA, objB);
}

export {};
