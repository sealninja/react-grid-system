import { defaultGutterWidth } from '../../utils';

export default ({ gutterWidth, moreStyle }) => {
  const theGutterWidth = gutterWidth || defaultGutterWidth;

  return {
    marginLeft: `-${theGutterWidth / 2}px`,
    marginRight: `-${theGutterWidth / 2}px`,
    ...moreStyle,
  };
};

export const getAfterStyle = () => ({
  display: 'table',
  clear: 'both',
});
