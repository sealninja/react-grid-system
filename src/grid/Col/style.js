import { screenClasses } from '../../utils';

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
  const styles = {
    boxSizing: 'border-box',
    minHeight: '1px',
    position: 'relative',
    paddingLeft: `${gutterWidth / 2}px`,
    paddingRight: `${gutterWidth / 2}px`,
    width: '100%',
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
      styles.flexBasis = getWidth(width[size], gridColumns) || styles.flexBasis;
      styles.maxWidth = getWidth(width[size], gridColumns) || styles.maxWidth;
      styles.marginLeft = getWidth(offset[size], gridColumns) || styles.marginLeft;
      styles.right = getWidth(pull[size], gridColumns) || styles.right;
      styles.left = getWidth(push[size], gridColumns) || styles.left;
    }
  });

  if (!hasWidth(width)) {
    styles.flexBasis = 0;
    styles.flexGrow = 1;
  }

  return styles;
};
