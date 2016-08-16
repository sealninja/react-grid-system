import { defaultBreakpoints } from '../../util';

export default ({ xs, sm, md, lg, viewport, breakpoints, moreStyle }) => {
  const theBreakpoints = breakpoints && breakpoints.length >= 3 ? breakpoints : defaultBreakpoints;

  const styles = {
    padding: '0 15px',
    minHeight: '1px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    ...moreStyle,
  };

  let colWidth = xs;
  if (viewport < theBreakpoints[0]) { // xs domain, smaller than 768px by default
    styles.width = `${(100 / 12) * colWidth}%`;
    return styles;
  }

  colWidth = Math.min(colWidth, sm);
  if (viewport < theBreakpoints[1]) { // sm domain, smaller than 992px by default
    styles.width = `${(100 / 12) * colWidth}%`;
    return styles;
  }

  colWidth = Math.min(colWidth, md);
  if (viewport < theBreakpoints[2]) { // md domain, smaller than 1200px by default
    styles.width = `${(100 / 12) * colWidth}%`;
    return styles;
  }

  // lg domain
  colWidth = Math.min(colWidth, lg);
  styles.width = `${(100 / 12) * colWidth}%`;
  return styles;
};
