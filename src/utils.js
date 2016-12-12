/* global window */

const getViewPort = ({ phone, tablet }) => {
  let viewport = 1600;
  if (tablet) viewport = 768; // iPad portrait width
  if (phone) viewport = 375; // iPhone 6 width
  if (typeof window !== 'undefined' && window.innerWidth) {
    viewport = window.innerWidth;
  }
  return viewport;
};

export const defaultBreakpoints = [576, 768, 992, 1200];

export const defaultContainerWidths = [540, 750, 960, 1140];

export const defaultGutterWidth = 30;

export const getScreenClass = ({ phone, tablet, breakpoints }) => {
  const theBreakpoints = breakpoints && breakpoints.length ? breakpoints : defaultBreakpoints;
  const viewport = getViewPort({ phone, tablet });

  let screenClass = 'xs';

  if (theBreakpoints[0] && viewport >= theBreakpoints[0]) screenClass = 'sm';
  if (theBreakpoints[1] && viewport >= theBreakpoints[1]) screenClass = 'md';
  if (theBreakpoints[2] && viewport >= theBreakpoints[2]) screenClass = 'lg';
  if (theBreakpoints[3] && viewport >= theBreakpoints[3]) screenClass = 'xl';

  return screenClass;
};

export const normalizeColumnWidth = (width) => {
  if (typeof width !== 'number') return undefined;
  return Math.max(0, Math.min(12, width));
};
