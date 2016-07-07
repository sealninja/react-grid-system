export const main = ({ moreStyle }) => ({
  ...moreStyle,
});

export const visible = ({ viewport, xs, sm, md, lg }) => {
  // xs domain
  if (viewport < 768) return xs;

  // sm domain
  if (viewport < 992) return sm;

  // md domain
  if (viewport < 1200) return md;

  // lg domain
  return lg;
};
