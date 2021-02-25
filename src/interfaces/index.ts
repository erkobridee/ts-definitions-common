/** anything that contains width and height */
export interface ISize {
  width: number;
  height: number;
}

/** any object(map) that contains string as key with any value assigned to them */
export interface IDictionary<T = unknown> {
  [key: string]: T;
}
