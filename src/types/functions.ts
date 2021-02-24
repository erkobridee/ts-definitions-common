export type TFunction<Tuple extends unknown[] = unknown[], Return = unknown> = (
  ...args: Tuple
) => Return;

export type TEmptyCallback = () => void;

export type TCallback<Tuple extends unknown[] = unknown[], Return = unknown> =
  | TFunction<Tuple, Return>
  | TEmptyCallback;

export type TTypeCallback<Return, Options = unknown> = (
  options?: Options
) => Return;
