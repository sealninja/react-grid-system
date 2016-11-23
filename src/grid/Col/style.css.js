import { defaultGutterWidth } from '../../utils';

export default ({ xs, sm, md, lg, xl, screenClass, gutterWidth, moreStyle }) => {
  const theGutterWidth = gutterWidth || defaultGutterWidth;

  const styles = {
    boxSizing: 'border-box',
    position: 'relative',
    minHeight: '1px',
    paddingLeft: `${theGutterWidth / 2}px`,
    paddingRight: `${theGutterWidth / 2}px`,
    float: 'left',
    ...moreStyle,
  };

  styles.width = '100%';

  if (xs) {
    styles.width = `${(100 / 12) * xs}%`;
  }

  if (sm && ['sm', 'md', 'lg', 'xl'].indexOf(screenClass) >= 0) {
    styles.width = `${(100 / 12) * sm}%`;
  }

  if (md && ['md', 'lg', 'xl'].indexOf(screenClass) >= 0) {
    styles.width = `${(100 / 12) * md}%`;
  }

  if (lg && ['lg', 'xl'].indexOf(screenClass) >= 0) {
    styles.width = `${(100 / 12) * lg}%`;
  }

  if (xl && ['xl'].indexOf(screenClass) >= 0) {
    styles.width = `${(100 / 12) * xl}%`;
  }

  return styles;
};
