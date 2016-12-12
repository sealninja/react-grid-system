/* global window */

import React from 'react';
import { throttle } from 'lodash';
import getStyle from './style.css';
import { getScreenClass, normalizeColumnWidth } from '../../utils';

export default class Col extends React.Component {
  static propTypes = {
    /**
     * Content of the column
     */
    children: React.PropTypes.node,
    /**
     * The width of the column for screenclass `xs`, between 0 and 12
     */
    xs: React.PropTypes.number,
    /**
     * The width of the column for screenclass `sm`, between 0 and 12
     */
    sm: React.PropTypes.number,
    /**
     * The width of the column for screenclass `md`, between 0 and 12
     */
    md: React.PropTypes.number,
    /**
     * The width of the column for screenclass `lg`, between 0 and 12
     */
    lg: React.PropTypes.number,
    /**
     * The width of the column for screenclass `xl`, between 0 and 12
     */
    xl: React.PropTypes.number,
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
    phone: React.PropTypes.bool,
    tablet: React.PropTypes.bool,
    breakpoints: React.PropTypes.arrayOf(React.PropTypes.number),
    gutterWidth: React.PropTypes.number,
  };

  componentWillMount = () => {
    this.setScreenClass();
  }

  componentDidMount = () => {
    this.eventListener = throttle(this.setScreenClass, 100);
    window.addEventListener('resize', this.eventListener);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.eventListener);
  }

  setScreenClass = () => {
    this.setState({ screenClass: getScreenClass(this.context) });
  }

  render = () => {
    const style = getStyle({
      xs: normalizeColumnWidth(this.props.xs),
      sm: normalizeColumnWidth(this.props.sm),
      md: normalizeColumnWidth(this.props.md),
      lg: normalizeColumnWidth(this.props.lg),
      xl: normalizeColumnWidth(this.props.xl),
      screenClass: this.state.screenClass,
      gutterWidth: this.context.gutterWidth,
      moreStyle: this.props.style,
    });
    return (
      <div style={style}>
        {this.props.children}
      </div>
    );
  };
}
