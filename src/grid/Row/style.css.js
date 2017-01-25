import { defaultGutterWidth } from '../../utils';

export default ({ gutterWidth, moreStyle }) => {
  const theGutterWidth = typeof gutterWidth === 'number' ? gutterWidth : defaultGutterWidth;

  return {
    ...moreStyle,
    marginLeft: `-${theGutterWidth / 2}px`,
    marginRight: `-${theGutterWidth / 2}px`,
  };
};

export const getAfterStyle = () => ({
  display: 'table',
  clear: 'both',
});

export const getAfterContentStyle = () => ({
  display: 'none',
});
