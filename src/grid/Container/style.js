export default ({
  fluid,
  xs,
  sm,
  md,
  lg,
  xl,
  screenClass,
  containerWidths,
  gutterWidth,
  moreStyle,
}) => {
  const styles = {
    boxSizing: 'border-box',
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: `${gutterWidth / 2}px`,
    paddingRight: `${gutterWidth / 2}px`,
    ...moreStyle,
  };

  if (fluid && (!sm && !md && !lg && !xl)) {
    return styles;
  }

  if (screenClass === 'sm' && containerWidths[0] && !sm && !xs) {
    styles.maxWidth = `${containerWidths[0]}px`;
  }

  if (screenClass === 'md' && containerWidths[1] && !md) {
    styles.maxWidth = `${containerWidths[1]}px`;
  }

  if (screenClass === 'lg' && containerWidths[2] && !lg) {
    styles.maxWidth = `${containerWidths[2]}px`;
  }

  if (screenClass === 'xl' && containerWidths[3] && !xl) {
    styles.maxWidth = `${containerWidths[3]}px`;
  }

  return styles;
};

export const getAfterStyle = () => ({
  display: 'table',
  clear: 'both',
});
