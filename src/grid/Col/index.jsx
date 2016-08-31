/* global window */

import React from 'react';
import getStyle from './style.css';
import { getViewPort } from '../../util';

export default class Col extends React.Component {
  static propTypes = {
    /**
     * Content of the component
     */
    children: React.PropTypes.node,
    xs: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    sm: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    md: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    lg: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * Optional styling
     */
    style: React.PropTypes.object,
  };

  static contextTypes = {
    phone: React.PropTypes.bool,
    tablet: React.PropTypes.bool,
    breakpoints: React.PropTypes.arrayOf(React.PropTypes.number),
    gutterWidth: React.PropTypes.number,
  };

  componentWillMount = () => {
    this.setViewport();
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.setViewport);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.setViewport);
  }

  setViewport = () => {
    this.setState({ viewport: getViewPort(this.context) });
  }

  render = () => {
    const style = getStyle({
      xs: this.props.xs,
      sm: this.props.sm,
      md: this.props.md,
      lg: this.props.lg,
      viewport: this.state.viewport,
      breakpoints: this.context.breakpoints,
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
