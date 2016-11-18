/* global window */

import React from 'react';
import * as style from './style.css';
import { getScreenClass } from '../../utils';
import RenderAny from '../../support/RenderAny';

export default class Visible extends React.Component {
  static propTypes = {
    /**
     * Content of the component
     */
    children: React.PropTypes.oneOfType([
      React.PropTypes.element,
      React.PropTypes.node,
      React.PropTypes.func,
    ]),
    /**
     * Show on extra small devices
     */
    xs: React.PropTypes.bool,
    /**
     * Show on small devices
     */
    sm: React.PropTypes.bool,
    /**
     * Show on medium devices
     */
    md: React.PropTypes.bool,
    /**
     * Show on large devices
     */
    lg: React.PropTypes.bool,
    /**
     * Show on xl devices
     */
    xl: React.PropTypes.bool,
    /**
     * Show on portrait mode
     */
    portrait: React.PropTypes.bool,
    /**
     * Show on landscape mode
     */
    landscape: React.PropTypes.bool,
  };

  static contextTypes = {
    phone: React.PropTypes.bool,
    tablet: React.PropTypes.bool,
    breakpoints: React.PropTypes.arrayOf(React.PropTypes.number),
  };

  static defaultProps = {
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    portrait: false,
    landscape: false,
  };

  componentWillMount = () => {
    this.setScreenClass();
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.setScreenClass);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.setScreenClass);
  }

  getOrientation = () => {
    return window.outerWidth < window.outerHeight ? 'portrait' : 'landscape';
  }

  setScreenClass = () => {
    this.setState({
      screenClass: getScreenClass(this.context),
      orientation: this.getOrientation(),
    });
  }

  render = () => {
    if (!style.visible({
      screenClass: this.state.screenClass,
      orientation: this.state.orientation,
      xs: this.props.xs,
      sm: this.props.sm,
      md: this.props.md,
      lg: this.props.lg,
      xl: this.props.xl,
      portrait: this.props.portrait,
      landscape: this.props.landscape,
    })) return false;
    return <RenderAny>{this.props.children}</RenderAny>;
  }
}
