import { defaultBreakpoints, defaultContainerWidths, defaultGutterWidth } from '../../util';

export default ({ fluid, viewport, breakpoints, containerWidths, gutterWidth, moreStyle }) => {
  const theBreakpoints =
    breakpoints && breakpoints.length >= 3 ? breakpoints : defaultBreakpoints;
  const theContainerWidths =
    containerWidths && containerWidths.length >= 3 ? containerWidths : defaultContainerWidths;
  const theGutterWidth = gutterWidth || defaultGutterWidth;

  const styles = {
    boxSizing: 'border-box',
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: `${theGutterWidth / 2}px`,
    paddingRight: `${theGutterWidth / 2}px`,
    width: 'auto',
    ...moreStyle,
  };

  if (fluid) {
    return styles;
  }

  if (viewport >= theBreakpoints[0]) { // sm domain, bigger than or equal to 768px by default
    styles.maxWidth = `${theContainerWidths[0]}px`; // 750px by default
    return styles;
  }

  if (viewport >= theBreakpoints[1]) { // md domain, bigger than or equal to 992px by default
    styles.maxWidth = `${theContainerWidths[1]}px`; // 970px by default
    return styles;
  }

  if (viewport >= theBreakpoints[2]) { // lg domain, bigger than or equal to 1200px by default
    styles.maxWidth = `${theContainerWidths[2]}px`; // 1170px by default
    return styles;
  }

  return styles;
};

export const getAfterStyle = () => ({
  display: 'table',
  clear: 'both',
});
