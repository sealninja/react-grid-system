import { defaultGutterWidth, normalizeColumnWidth, screenClasses } from '../../utils';

const getWidth = (width, defaultWidth = 12) => {
  if (typeof width !== 'number') return undefined;
  const colWidth = normalizeColumnWidth(width);
  if (colWidth === defaultWidth) return undefined;
  return `${(100 / 12) * colWidth}%`;
};

export default ({
    width = {},
    offset = {},
    pull = {},
    push = {},
    debug,
    screenClass,
    gutterWidth,
moreStyle }) => {
  const theGutterWidth = typeof gutterWidth === 'number' ? gutterWidth : defaultGutterWidth;

  const styles = {
    boxSizing: 'border-box',
    minHeight: '1px',
    position: 'relative',
    paddingLeft: `${theGutterWidth / 2}px`,
    paddingRight: `${theGutterWidth / 2}px`,
    float: 'left',
    ...moreStyle,
  };

  if (debug) {
    styles.paddingTop = '10px';
    styles.paddingBottom = '10px';
    styles.border = '1px solid rgba(86,86,86,.2)';
    styles.background = 'rgba(86,86,86,.15)';
  }

  styles.width = '100%';
  styles.marginLeft = '0%';
  styles.right = 'auto';
  styles.left = 'auto';

  if (screenClasses.indexOf(screenClass) >= 0) {
      styles.width = getWidth(width[screenClass]) || styles.width;
      styles.marginLeft = getWidth(offset[screenClass]) || styles.marginLeft;
      styles.right = getWidth(pull[screenClass]) || styles.right;
      styles.left = getWidth(push[screenClass]) || styles.left;
  }

  return styles;
};
