/** describes any type of function, that could or not have parameters and return */
export type TFunction<Tuple extends unknown[] = unknown[], Return = unknown> = (
  ...args: Tuple
) => Return;

/** describes any function that doesn't have parameters and doesn't return nothing */
export type TEmptyCallback = () => void;

/** describes any function that could be a **TFunction** or **TEmptyCallback** */
export type TCallback<Tuple extends unknown[] = unknown[], Return = unknown> =
  | TFunction<Tuple, Return>
  | TEmptyCallback;

/** describes any function that could receive options params and should return a value */
export type TTypeCallback<Return, Options = unknown> = (
  options?: Options
) => Return;
