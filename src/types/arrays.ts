/**
 * describe a function used on the `Array.filter`
 *
 * @example
 * ```
 * const greaterThan2: TArrayFilter = (item) => (item > 2);
 *
 * [-1, 0, 1, 2, 3, 4].filter(greaterThan2) // return [3, 4]
 * ```
 */
export type TArrayFilter<Item> = (item: Item) => boolean;
