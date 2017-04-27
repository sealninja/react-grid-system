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

  styles.width = '100%';
  styles.marginLeft = '0%';
  styles.right = 'auto';
  styles.left = 'auto';

  screenClasses.forEach((size, index) => {
    if (screenClasses.indexOf(screenClass) >= index) {
      styles.width = getWidth(width[size]) || styles.width;
      styles.marginLeft = getWidth(offset[size]) || styles.marginLeft;
      styles.right = getWidth(pull[size]) || styles.right;
      styles.left = getWidth(push[size]) || styles.left;
    }
  });

  return styles;
};
