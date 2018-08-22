export default ({
  gutterWidth, align, justify, debug, moreStyle,
}) => {
  // Vertical alignment
  let alignItems = align;
  if (align === 'start') alignItems = 'flex-start';
  if (align === 'end') alignItems = 'flex-end';

  // Horizontal alignment
  let justifyContent = justify;
  if (justify === 'start') justifyContent = 'flex-start';
  if (justify === 'end') justifyContent = 'flex-end';
  if (justify === 'between') justifyContent = 'space-between';
  if (justify === 'around') justifyContent = 'space-around';
  if (justify === 'center') justifyContent = 'center';
  if (justify === 'initial') justifyContent = 'initial';
  if (justify === 'inherit') justifyContent = 'inherit';

  const styles = {
    marginLeft: `-${gutterWidth / 2}px`,
    marginRight: `-${gutterWidth / 2}px`,
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 0,
    flexShrink: 0,
    alignItems,
    justifyContent,
    ...moreStyle,
  };

  if (debug) {
    styles.background = 'rgba(128,128,128,.05)';
  }

  return styles;
};
