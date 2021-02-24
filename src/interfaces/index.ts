export interface ISize {
  width: number;
  height: number;
}

export interface IDictionary<T = unknown> {
  [key: string]: T;
}

export interface IProjectWindow extends Window {
  /* eslint-disable-next-line */
  CSS?: IDictionary<any>;
}
