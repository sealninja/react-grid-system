import { defaultContainerWidths, defaultGutterWidth } from '../../utils';

export default ({
  fluid,
  xs, sm, md, lg, xl,
  screenClass,
  containerWidths,
  gutterWidth,
  moreStyle,
}) => {
  const theContainerWidths = containerWidths && containerWidths.length
    ? containerWidths
    : defaultContainerWidths;
  const theGutterWidth = typeof gutterWidth === 'number' ? gutterWidth : defaultGutterWidth;

  const styles = {
    boxSizing: 'border-box',
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: `${theGutterWidth / 2}px`,
    paddingRight: `${theGutterWidth / 2}px`,
    ...moreStyle,
  };

  if (fluid && (!sm && !md && !lg && !xl)) {
    return styles;
  }

  if (screenClass === 'sm' && theContainerWidths[0] && !sm && !xs) {
    styles.maxWidth = `${theContainerWidths[0]}px`;
  }

  if (screenClass === 'md' && theContainerWidths[1] && !md) {
    styles.maxWidth = `${theContainerWidths[1]}px`;
  }

  if (screenClass === 'lg' && theContainerWidths[2] && !lg) {
    styles.maxWidth = `${theContainerWidths[2]}px`;
  }

  if (screenClass === 'xl' && theContainerWidths[3] && !xl) {
    styles.maxWidth = `${theContainerWidths[3]}px`;
  }

  return styles;
};

export const getAfterStyle = () => ({
  display: 'table',
  clear: 'both',
});
