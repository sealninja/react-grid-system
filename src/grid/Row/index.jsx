/* eslint react/prefer-stateless-function: "off" */

import React from 'react';
import getStyle, { getAfterStyle, getAfterContentStyle } from './style.css';

export default class Row extends React.Component {
  static propTypes = {
    /**
     * Content of the element
     */
    children: React.PropTypes.node,
    /**
     * Optional styling
     */
    style: React.PropTypes.objectOf(
       React.PropTypes.oneOfType([
         React.PropTypes.number,
         React.PropTypes.string,
       ])
     ),
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
        <div style={getAfterStyle()}><span style={getAfterContentStyle()}>&nbsp;</span></div>
      </div>
    );
  }
}
