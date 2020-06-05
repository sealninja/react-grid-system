export const visible = ({
  screenClass, xs, sm, md, lg, xl, xxl,
}) => {
  if (screenClass === 'xxl') return xxl;
  if (screenClass === 'xl') return xl;
  if (screenClass === 'lg') return lg;
  if (screenClass === 'md') return md;
  if (screenClass === 'sm') return sm;
  return xs;
};

export default visible;
