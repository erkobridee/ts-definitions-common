export const isBrowser = typeof window !== 'undefined';

export const APP_URL = isBrowser
  ? `${window.location.protocol}//${window.location.hostname}${
      window.location.port ? `:${window.location.port}` : ''
    }`
  : '';
