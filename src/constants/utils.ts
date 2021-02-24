/**
 * get the type name of the JS Object
 *
 * @example
 * ```TO_STRING(1); // [object Number]```
 *
 * @example
 * ```TO_STRING(/x/); // [object RegExp]```
 *
 * @param {any} value
 * @returns string - type of the Object
 */
export const TO_STRING = (value: any): string => ({}.toString.call(value));

/** useful to define a default callback that doesn't do nothing */
export const NOOP = (): undefined => undefined;
