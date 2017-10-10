import { defaultGutterWidth } from '../../utils';

export default ({ gutterWidth, align, grow, debug, moreStyle }) => {
  const theGutterWidth = typeof gutterWidth === 'number' ? gutterWidth : defaultGutterWidth;

  let alignItems = align;
  if (align === 'start') alignItems = 'flex-start';
  if (align === 'end') alignItems = 'flex-end';

  const styles = {
    marginLeft: `-${theGutterWidth / 2}px`,
    marginRight: `-${theGutterWidth / 2}px`,
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: grow ? 1 : 0,
    alignItems,
    ...moreStyle,
  };

  if (debug) {
    styles.background = 'rgba(128,128,128,.05)';
  }

  return styles;
};
