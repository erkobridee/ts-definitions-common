/**
 * regular expression to check a true value
 *
 * expression: `/^(?:t(?:rue)?|y(?:es)?|on|1)$/i`
 *
 * truthy values: `t, true, y, yes, on, 1`
 *
 * @example
 * ```TRUTHY.test(1) //true```
 */
export const TRUTHY = /^(?:t(?:rue)?|y(?:es)?|on|1)$/i;

/**
 * regular expression to check a false value
 *
 * expression: `/^(?:f(?:alse)?|no?|off|0)$/i`
 *
 * false values: `f, false, no, off, 0`
 *
 * @example
 * ```FALSY.test(0) //true```
 */
export const FALSY = /^(?:f(?:alse)?|no?|off|0)$/i;
