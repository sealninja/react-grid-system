import { defaultBreakpoints } from '../../util';

export const visible = ({ viewport, xs, sm, md, lg, breakpoints }) => {
  const theBreakpoints = breakpoints && breakpoints.length >= 3 ? breakpoints : defaultBreakpoints;

  // xs domain
  if (viewport < theBreakpoints[0]) return xs;

  // sm domain
  if (viewport < theBreakpoints[1]) return sm;

  // md domain
  if (viewport < theBreakpoints[2]) return md;

  // lg domain
  return lg;
};

export default visible;
