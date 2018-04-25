import { defaultGutterWidth, screenClasses, defaultGridColumns } from '../../utils';

const hasWidth = widths => Object.keys(widths).reduce((acc, cur) => acc || widths[cur], false);

const getWidth = (width, gridColumns) => {
  if (typeof width !== 'number') return undefined;
  const normalizedWidth = Math.max(0, Math.min(gridColumns, width));
  return `${(100 / gridColumns) * normalizedWidth}%`;
};

export default ({
  width = {},
  offset = {},
  pull = {},
  push = {},
  debug,
  screenClass,
  gutterWidth,
  moreStyle,
  gridColumns,
}) => {
  const theGutterWidth = typeof gutterWidth === 'number' ? gutterWidth : defaultGutterWidth;
  const theGridColumns = typeof gridColumns === 'number' ? gridColumns : defaultGridColumns;

  const styles = {
    boxSizing: 'border-box',
    minHeight: '1px',
    position: 'relative',
    paddingLeft: `${theGutterWidth / 2}px`,
    paddingRight: `${theGutterWidth / 2}px`,
    width: '100%',
    overflow: 'hidden',
    ...moreStyle,
  };

  if (debug) {
    styles.outline = '1px solid silver';
    styles.background = 'rgba(0,0,0,.05)';
  }

  styles.flexBasis = '100%';
  styles.flexGrow = 0;
  styles.flexShrink = 0;
  styles.maxWidth = '100%';
  styles.marginLeft = '0%';
  styles.right = 'auto';
  styles.left = 'auto';

  screenClasses.forEach((size, index) => {
    if (screenClasses.indexOf(screenClass) >= index) {
      styles.flexBasis = getWidth(width[size], theGridColumns) || styles.flexBasis;
      styles.maxWidth = getWidth(width[size], theGridColumns) || styles.maxWidth;
      styles.marginLeft = getWidth(offset[size], theGridColumns) || styles.marginLeft;
      styles.right = getWidth(pull[size], theGridColumns) || styles.right;
      styles.left = getWidth(push[size], theGridColumns) || styles.left;
    }
  });

  if (!hasWidth(width)) {
    styles.flexBasis = 0;
    styles.flexGrow = 1;
  }

  return styles;
};
