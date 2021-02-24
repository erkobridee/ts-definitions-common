/** a typescript helper to easy get which is the type of a Object property */
export type TPropType<TObj, TProp extends keyof TObj> = TObj[TProp];
