import React from 'react';

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
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.node,
    React.PropTypes.func,
  ]),
};

export default RenderAny;
