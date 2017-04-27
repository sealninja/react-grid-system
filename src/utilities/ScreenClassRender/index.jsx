/* global window */

import React from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';
import { getScreenClass } from '../../utils';

export default class ScreenClassRender extends React.Component {
  static propTypes = {
    /**
     * Content of the component
     */
    children: PropTypes.element.isRequired,
    /**
     * A function returning the style for the children.
     * This function gets the screen class as the first parameter,
     * and the props of the child element as the second parameter
     */
    style: PropTypes.func.isRequired,
  };

  static defaultProps = {
    style: null,
  }

  static contextTypes = {
    phone: PropTypes.bool,
    tablet: PropTypes.bool,
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
    window.removeEventListener('resize', this.eventListener);
  }

  setScreenClass = () => {
    this.setState({ screenClass: getScreenClass(this.context) });
  }

  getStyle = () => this.props.style(this.state.screenClass, this.props.children.props);

  render = () => React.cloneElement(this.props.children, { style: this.getStyle() });
}
