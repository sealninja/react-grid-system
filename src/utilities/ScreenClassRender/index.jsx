/* global window */

import React from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';
import { getScreenClass } from '../../utils';
import RenderAny from '../../support/RenderAny';

export default class ScreenClassRender extends React.Component {
  static propTypes = {
    /**
     * Content of the component
     */
    children: PropTypes.element,
    /**
     * A function returning the style for the children.
     * Will be called with two arguments: the screen class and
     * the props of the child element.
     */
    style: PropTypes.func,
    /**
     * A function which return value will be rendered.
     * Will be called with one argument: the screen class.
     * When set, the props children and style will be ignored.
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
    window.removeEventListener('resize', this.eventListener);
  }

  setScreenClass = () => {
    this.setState({ screenClass: getScreenClass(this.context) });
  }

  getStyle = () => this.props.style(this.state.screenClass, this.props.children.props);

  render = () => {
    if (this.props.render) {
      return <RenderAny>{this.props.render(this.state.screenClass)}</RenderAny>;
    }
    if (this.props.style) {
      return React.cloneElement(this.props.children, { style: this.getStyle() });
    }
    return false;
  }
}
