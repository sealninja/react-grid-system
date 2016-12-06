/* global window */

import React from 'react';
import { throttle } from 'lodash';
import * as style from './style.css';
import { getScreenClass } from '../../utils';
import RenderAny from '../../support/RenderAny';

export default class Hidden extends React.Component {
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
     * Hide on extra small devices
     */
    xs: React.PropTypes.bool,
    /**
     * Hide on small devices
     */
    sm: React.PropTypes.bool,
    /**
     * Hide on medium devices
     */
    md: React.PropTypes.bool,
    /**
     * Hide on large devices
     */
    lg: React.PropTypes.bool,
    /**
     * Hide on xlarge devices
     */
    xl: React.PropTypes.bool,
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
    if (style.hidden({
      screenClass: this.state.screenClass,
      xs: this.props.xs,
      sm: this.props.sm,
      md: this.props.md,
      lg: this.props.lg,
      xl: this.props.xl,
    })) return false;
    return <RenderAny>{this.props.children}</RenderAny>;
  }
}
