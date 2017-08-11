import React from 'react';
import PropTypes from 'prop-types';

const RenderAny = ({ children }) => {
  if (!children) return null;
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
  ]),
};

RenderAny.defaultProps = {
  children: null,
};

export default RenderAny;
