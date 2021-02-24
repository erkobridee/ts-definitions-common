/**
 * useful to avoid some code execution on Server Side Rendering
 *
 * check: `typeof window !== 'undefined';`
 */
export const isBrowser = typeof window !== 'undefined';

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
