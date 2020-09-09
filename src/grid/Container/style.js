export default ({
  fluid,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
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
    paddingLeft: gutterWidth / 2,
    paddingRight: gutterWidth / 2,
  };

  if (fluid && (!sm && !md && !lg && !xl)) {
    return { ...styles, ...moreStyle };
  }

  if (screenClass === 'sm' && containerWidths[0] && !sm && !xs) {
    styles.maxWidth = containerWidths[0];
  }

  if (screenClass === 'md' && containerWidths[1] && !md) {
    styles.maxWidth = containerWidths[1];
  }

  if (screenClass === 'lg' && containerWidths[2] && !lg) {
    styles.maxWidth = containerWidths[2];
  }

  if (screenClass === 'xl' && containerWidths[3] && !xl) {
    styles.maxWidth = containerWidths[3];
  }

  if (screenClass === 'xxl' && containerWidths[4] && !xxl) {
    styles.maxWidth = containerWidths[4];
  }

  return { ...styles, ...moreStyle };
};

export const getAfterStyle = () => ({
  display: 'table',
  clear: 'both',
});
