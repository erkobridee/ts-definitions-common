/** anything that contains width and height */
export interface ISize {
  width: number;
  height: number;
}

/** any object(map) that contains string as key with any value assigned to them */
export interface IDictionary<T = unknown> {
  [key: string]: T;
}

/**
 * add the missing CSS.supports from the WebAPI
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/CSS/supports
 */
export interface IBaseWindow extends Window {
  CSS?: typeof CSS;
}
