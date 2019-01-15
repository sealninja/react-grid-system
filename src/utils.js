/* global window */
/* eslint "no-console": "off" */

import { getConfiguration } from './config';

const getViewPort = (source) => {
  if (source && source.clientWidth) {
    return source.clientWidth;
  }
  if (typeof window !== 'undefined' && window.innerWidth) {
    return window.innerWidth;
  }
  return null;
};

export const screenClasses = ['xs', 'sm', 'md', 'lg', 'xl'];

export const getScreenClass = (source) => {
  const { breakpoints, defaultScreenClass } = getConfiguration();
  let screenClass = defaultScreenClass;

  const viewport = getViewPort(source);
  if (viewport) {
    screenClass = 'xs';
    if (breakpoints[0] && viewport >= breakpoints[0]) screenClass = 'sm';
    if (breakpoints[1] && viewport >= breakpoints[1]) screenClass = 'md';
    if (breakpoints[2] && viewport >= breakpoints[2]) screenClass = 'lg';
    if (breakpoints[3] && viewport >= breakpoints[3]) screenClass = 'xl';
  }

  return screenClass;
};
