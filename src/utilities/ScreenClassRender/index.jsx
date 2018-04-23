/* global window */
/* eslint no-console: off */

import React from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';
import { getScreenClass } from '../../utils';

export default class ScreenClassRender extends React.Component {
  static propTypes = {
    /**
     * Deprecated, will be removed in the next major release
     */
    children: PropTypes.element,
    /**
     * Deprecated, will be removed in the next major release
     */
    style: PropTypes.func,
    /**
     * The function which return value will be rendered.
     * Will be called with one argument: the screen class.
     */
    render: PropTypes.func,
  };

  static defaultProps = {
    children: null,
    style: null,
    render: null,
  }

  static contextTypes = {
    serverSideScreenClass: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    breakpoints: PropTypes.arrayOf(PropTypes.number),
  };

  componentWillMount = () => {
    this.setScreenClass();
  }

  componentDidMount = () => {
    this.eventListener = throttle(this.setScreenClass, 100);
    window.addEventListener('resize', this.eventListener);
  }

  componentWillUnmount = () => {
    this.eventListener.cancel();
    window.removeEventListener('resize', this.eventListener);
  }

  setScreenClass = () => {
    this.setState({ screenClass: getScreenClass(this.context) });
  }

  getStyle = () => this.props.style(this.state.screenClass, this.props.children.props);

  warned: false;

  render = () => {
    if (this.props.render) {
      return <React.Fragment>{this.props.render(this.state.screenClass)}</React.Fragment>;
    }
    if (!this.warned) {
      console.warn('Please use the render prop of ScreenClassRender. Using style and children is deprecated and will be removed in the next major release.');
      this.warned = true;
    }
    if (this.props.style) {
      return React.cloneElement(this.props.children, { style: this.getStyle() });
    }
    return false;
  }
}
