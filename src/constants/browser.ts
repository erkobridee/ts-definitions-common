/**
 * useful to avoid some code execution on Server Side Rendering
 *
 * check: `typeof window !== 'undefined';`
 */
export const isBrowser = typeof window !== 'undefined';

/**
 * cache the result of `window.CSS.supports('(--a: 0)')`
 */
export const hasCssVariablesSupport = !isBrowser
  ? false
  : window &&
    window.CSS &&
    window.CSS.supports &&
    window.CSS.supports('(--a: 0)');

/**
 * get the current URL from the web application
 *
 * **NOTE:** it will be empty if it's executed on the server side
 */
export const APP_URL = isBrowser
  ? `${window.location.protocol}//${window.location.hostname}${
      window.location.port ? `:${window.location.port}` : ''
    }`
  : '';
