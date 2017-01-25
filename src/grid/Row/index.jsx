/* eslint react/prefer-stateless-function: "off" */

import React from 'react';
import getStyle, { getAfterStyle, getAfterContentStyle } from './style.css';

export default class Row extends React.Component {
  static propTypes = {
    /**
     * Content of the element
     */
    children: React.PropTypes.node.isRequired,
    /**
     * Optional styling
     */
    style: React.PropTypes.objectOf(
       React.PropTypes.oneOfType([
         React.PropTypes.number,
         React.PropTypes.string,
       ]),
     ),
  };

  static defaultProps = {
    style: {},
  }

  static contextTypes = {
    gutterWidth: React.PropTypes.number,
  };

  render = () => {
    const { children, style, ...otherProps } = this.props;
    const theStyle = getStyle({
      gutterWidth: this.context.gutterWidth,
      moreStyle: style,
    });
    return (
      <div style={theStyle} {...otherProps}>
        {children}
        <div style={getAfterStyle()}><span style={getAfterContentStyle()}>&nbsp;</span></div>
      </div>
    );
  }
}
