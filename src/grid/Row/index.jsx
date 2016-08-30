import React from 'react';
import getStyle, { getBeforeStyle, getAfterStyle } from './style.css.js';

const Row = ({ children, style }) => (
  <div style={getStyle({ moreStyle: style })}>
    <span style={getBeforeStyle()} />
    {children}
    <span style={getAfterStyle()} />
  </div>
);

Row.propTypes = {
  /**
   * Content of the element
   */
  children: React.PropTypes.node,
  /**
   * Optional styling
   */
  style: React.PropTypes.object,
};

export default Row;
