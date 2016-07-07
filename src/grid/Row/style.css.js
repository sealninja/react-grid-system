export default ({ moreStyle }) => ({
  margin: '0 -15px',
  display: 'flex',
  flexWrap: 'wrap',
  ...moreStyle,
});

export const getBeforeStyle = () => ({
  display: 'table',
});

export const getAfterStyle = () => ({
  display: 'table',
  clear: 'both',
});
