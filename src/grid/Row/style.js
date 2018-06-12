export default ({
  gutterWidth, align, debug, moreStyle,
}) => {
  let alignItems = align;
  if (align === 'start') alignItems = 'flex-start';
  if (align === 'end') alignItems = 'flex-end';

  const styles = {
    marginLeft: `-${gutterWidth / 2}px`,
    marginRight: `-${gutterWidth / 2}px`,
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 0,
    flexShrink: 0,
    alignItems,
    ...moreStyle,
  };

  if (debug) {
    styles.background = 'rgba(128,128,128,.05)';
  }

  return styles;
};
