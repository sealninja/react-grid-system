let configuration = {
  breakpoints: [576, 768, 992, 1200],
  containerWidths: [540, 750, 960, 1140],
  gutterWidth: 30,
  gridColumns: 12,
  defaultScreenClass: 'xl',
};

export const getConfiguration = () => configuration;

export const setConfiguration = (newConfiguration) => {
  configuration = { ...configuration, ...newConfiguration };
};
