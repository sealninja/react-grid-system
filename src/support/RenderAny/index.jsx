import React from 'react';
import PropTypes from 'prop-types';

const RenderAny = ({ children }) => {
  if (typeof children === 'function') {
    return children();
  }
  if (typeof children === 'object' && Array.isArray(children)) {
    return <div>{children}</div>;
  }
  return children;
};

RenderAny.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
};

export default RenderAny;
