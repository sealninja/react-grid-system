export default ({
  gutterWidth, align, justify, debug, moreStyle, nowrap, direction
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

  const flexDirection = ['column', 'row', 'column-reverse', 'row-reverse'].includes(direction) ? direction : undefined;

  const styles = {
    marginLeft: -gutterWidth / 2,
    marginRight: -gutterWidth / 2,
    display: 'flex',
    flexWrap: nowrap ? 'nowrap' : 'wrap',
    flexGrow: 0,
    flexShrink: 0,
    alignItems,
    justifyContent,
    flexDirection
  };

  if (debug) {
    styles.background = 'rgba(128,128,128,.05)';
  }

  return { ...styles, ...moreStyle };
};
