/* global window */

export const getViewPort = (context) => {
  let viewport = 1600;
  if (context.tablet) viewport = 768; // iPad portrait width
  if (context.phone) viewport = 375; // iPhone 6 width
  if (typeof window !== 'undefined' && window.innerWidth) {
    viewport = window.innerWidth;
  }
  return viewport;
};

export const defaultBreakpoints = [768, 992, 1200];

export const defaultContainerWidths = [750, 970, 1170];

export const defaultGutterWidth = 30;
