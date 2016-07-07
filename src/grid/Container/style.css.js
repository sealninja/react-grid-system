export default ({ fluid, viewport }) => {
  const styles = {
    boxSizing: 'border-box',
    position: 'relative',
  };

  if (fluid) {
    return styles;
  }

  styles.padding = '0 15px';
  styles.margin = '0 auto';
  styles.maxWidth = '100%';

  if (viewport < 768) { // xs domain
    styles.width = 'auto';
    return styles;
  }

  if (viewport < 992) { // sm domain
    styles.width = '750px';
    return styles;
  }

  if (viewport < 1200) { // md domain
    styles.width = '970px';
    return styles;
  }

  // lg domain
  styles.width = '1170px';
  return styles;
};
