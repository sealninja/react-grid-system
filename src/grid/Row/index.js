import React from 'react';
import getStyle, { getBeforeStyle, getAfterStyle } from './style.css.js';

const Row = ({ children, style }) => (
  <div style={getStyle({ moreStyle: style })}>
    <span style={getBeforeStyle()}> </span>
    {children}
    <span style={getAfterStyle()}> </span>
  </div>
);

Row.propTypes = {
  /**
   * Content of the element
   */
  children: React.PropTypes.node.isRequired,
  style: React.PropTypes.object,
};

export default Row;
