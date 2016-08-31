import { defaultBreakpoints, defaultGutterWidth } from '../../util';

export default ({ xs, sm, md, lg, viewport, breakpoints, gutterWidth, moreStyle }) => {
  const theBreakpoints = breakpoints && breakpoints.length >= 3 ? breakpoints : defaultBreakpoints;
  const theGutterWidth = gutterWidth || defaultGutterWidth;

  const styles = {
    boxSizing: 'border-box',
    position: 'relative',
    minHeight: '1px',
    paddingLeft: `${theGutterWidth / 2}px`,
    paddingRight: `${theGutterWidth / 2}px`,
    float: 'left',
    ...moreStyle,
  };

  styles.width = '100%';

  if (xs) {
    styles.width = `${(100 / 12) * xs}%`;
  }

  if (viewport >= theBreakpoints[0] && sm) {
    styles.width = `${(100 / 12) * sm}%`;
  }

  if (viewport >= theBreakpoints[0] && md) {
    styles.width = `${(100 / 12) * md}%`;
  }

  if (viewport >= theBreakpoints[0] && lg) {
    styles.width = `${(100 / 12) * lg}%`;
  }

  return styles;
};
