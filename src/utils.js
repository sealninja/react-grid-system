/* global window */
/* eslint "no-console": "off" */

const getViewPort = () => {
  if (typeof window !== 'undefined' && window.innerWidth) {
    return window.innerWidth;
  }
  return null;
};

export const screenClasses = ['xs', 'sm', 'md', 'lg', 'xl'];

export const defaultBreakpoints = [576, 768, 992, 1200];

export const defaultContainerWidths = [540, 750, 960, 1140];

export const defaultGutterWidth = 30;

export const getScreenClass = ({ serverSideScreenClass, breakpoints }) => {
  const theBreakpoints = breakpoints && breakpoints.length ? breakpoints : defaultBreakpoints;

  let screenClass = serverSideScreenClass || 'xl';

  const viewport = getViewPort();
  if (viewport) {
    screenClass = 'xs';
    if (theBreakpoints[0] && viewport >= theBreakpoints[0]) screenClass = 'sm';
    if (theBreakpoints[1] && viewport >= theBreakpoints[1]) screenClass = 'md';
    if (theBreakpoints[2] && viewport >= theBreakpoints[2]) screenClass = 'lg';
    if (theBreakpoints[3] && viewport >= theBreakpoints[3]) screenClass = 'xl';
  }

  return screenClass;
};

export const normalizeColumnWidth = width => Math.max(0, Math.min(12, width));
