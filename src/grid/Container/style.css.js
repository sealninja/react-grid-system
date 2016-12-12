import { defaultContainerWidths, defaultGutterWidth } from '../../utils';

export default ({ fluid, screenClass, containerWidths, gutterWidth, moreStyle }) => {
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
    width: 'auto',
    ...moreStyle,
  };

  if (fluid) {
    return styles;
  }

  if (screenClass === 'sm' && theContainerWidths[0]) {
    styles.maxWidth = `${theContainerWidths[0]}px`;
  }

  if (screenClass === 'md' && theContainerWidths[1]) {
    styles.maxWidth = `${theContainerWidths[1]}px`;
  }

  if (screenClass === 'lg' && theContainerWidths[2]) {
    styles.maxWidth = `${theContainerWidths[2]}px`;
  }

  if (screenClass === 'xl' && theContainerWidths[3]) {
    styles.maxWidth = `${theContainerWidths[3]}px`;
  }

  return styles;
};

export const getAfterStyle = () => ({
  display: 'table',
  clear: 'both',
});
