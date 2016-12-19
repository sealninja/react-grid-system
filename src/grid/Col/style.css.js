import { defaultGutterWidth, normalizeColumnWidth } from '../../utils';

const getWidth = (width) => {
  const colWidth = normalizeColumnWidth(width);
  if (colWidth) return `${(100 / 12) * colWidth}%`;
  return undefined;
};

export default ({ xs, sm, md, lg, xl, offset = {}, screenClass, gutterWidth, moreStyle }) => {
  const theGutterWidth = typeof gutterWidth === 'number' ? gutterWidth : defaultGutterWidth;

  const styles = {
    boxSizing: 'border-box',
    position: 'relative',
    minHeight: '1px',
    paddingLeft: `${theGutterWidth / 2}px`,
    paddingRight: `${theGutterWidth / 2}px`,
    float: 'left',
    ...moreStyle,
  };

  let width = null;
  let marginLeft = null;

  if (['xl'].indexOf(screenClass) >= 0) {
    width = width || getWidth(xl);
    marginLeft = marginLeft || getWidth(offset.xl);
  }

  if (['lg', 'xl'].indexOf(screenClass) >= 0) {
    width = width || getWidth(lg);
    marginLeft = marginLeft || getWidth(offset.lg);
  }

  if (['md', 'lg', 'xl'].indexOf(screenClass) >= 0) {
    width = width || getWidth(md);
    marginLeft = marginLeft || getWidth(offset.md);
  }

  if (['sm', 'md', 'lg', 'xl'].indexOf(screenClass) >= 0) {
    width = width || getWidth(sm);
    marginLeft = marginLeft || getWidth(offset.sm);
  }

  width = width || getWidth(xs) || '100%';
  marginLeft = marginLeft || getWidth(offset.xs) || '0%';

  styles.width = width;
  styles.marginLeft = marginLeft;

  return styles;
};
