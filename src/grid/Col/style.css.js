export default ({ xs, sm, md, lg, viewport, moreStyle }) => {
  const styles = {
    padding: '0 15px',
    minHeight: '1px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    ...moreStyle,
  };

  let colWidth = xs;
  if (viewport < 768) { // xs domain
    styles.width = `${(100 / 12) * colWidth}%`;
    return styles;
  }

  colWidth = Math.min(colWidth, sm);
  if (viewport < 992) { // sm domain
    styles.width = `${(100 / 12) * colWidth}%`;
    return styles;
  }

  colWidth = Math.min(colWidth, md);
  if (viewport < 1200) { // md domain
    styles.width = `${(100 / 12) * colWidth}%`;
    return styles;
  }

  // lg domain
  colWidth = Math.min(colWidth, lg);
  styles.width = `${(100 / 12) * colWidth}%`;
  return styles;
};
