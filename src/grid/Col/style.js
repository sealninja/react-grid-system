import { defaultGutterWidth, normalizeColumnWidth, screenClasses } from '../../utils';

const getWidth = (width, defaultWidth = 12) => {
  if (typeof width !== 'number') return undefined;
  const colWidth = normalizeColumnWidth(width);
  if (colWidth === defaultWidth) return undefined;
  return `${(100 / 12) * colWidth}%`;
};

export default ({ width = {}, offset = {}, screenClass, gutterWidth, moreStyle }) => {
  const theGutterWidth = typeof gutterWidth === 'number' ? gutterWidth : defaultGutterWidth;

  const styles = {
    boxSizing: 'border-box',
    minHeight: '1px',
    paddingLeft: `${theGutterWidth / 2}px`,
    paddingRight: `${theGutterWidth / 2}px`,
    float: 'left',
    ...moreStyle,
  };

  styles.width = '100%';
  styles.marginLeft = '0%';

  screenClasses.forEach((size, index) => {
    if (screenClasses.indexOf(screenClass) >= index) {
      styles.width = getWidth(width[size]) || styles.width;
      styles.marginLeft = getWidth(offset[size]) || styles.marginLeft;
    }
  });

  return styles;
};
