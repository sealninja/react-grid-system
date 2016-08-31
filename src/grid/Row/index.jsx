/* eslint react/prefer-stateless-function: "off" */

import React from 'react';
import getStyle, { getAfterStyle } from './style.css';

export default class Row extends React.Component {
  static propTypes = {
    /**
     * Content of the element
     */
    children: React.PropTypes.node,
    /**
     * Optional styling
     */
    style: React.PropTypes.object,
  };

  static contextTypes = {
    gutterWidth: React.PropTypes.number,
  };

  render = () => {
    const style = getStyle({
      gutterWidth: this.context.gutterWidth,
      moreStyle: this.props.style,
    });
    return (
      <div style={style}>
        {this.props.children}
        <span style={getAfterStyle()} />
      </div>
    );
  }
}
