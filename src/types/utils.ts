/** a typescript helper to easy get which is the type of a Object property */
export type TPropType<TObj, TProp extends keyof TObj> = TObj[TProp];

/** JavaScript Object type */
export type TJSObject<T = unknown> = Record<string, T> & Object;

/** JavaScript value that could be an object or any other js value */
export type TJSValue<T = unknown> = TJSObject<T> | unknown;
