export const getViewPort = (context) => {
  let viewport = 1600;
  if (context.tablet) viewport = 900;
  if (context.phone) viewport = 600;
  if (typeof window !== 'undefined' && window.innerWidth) {
    viewport = window.innerWidth;
  }
  return viewport;
};

export const defaultBreakpoints = [768, 992, 1200];

export const defaultContainerWidths = [750, 970, 1170];
