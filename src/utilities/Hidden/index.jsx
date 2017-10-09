/* global window */

import React from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';
import * as style from './style';
import { getScreenClass } from '../../utils';
import RenderAny from '../../support/RenderAny';

export default class Hidden extends React.Component {
  static propTypes = {
    /**
     * Content of the component
     */
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.node,
      PropTypes.func,
    ]).isRequired,
    /**
     * Hide on extra small devices
     */
    xs: PropTypes.bool,
    /**
     * Hide on small devices
     */
    sm: PropTypes.bool,
    /**
     * Hide on medium devices
     */
    md: PropTypes.bool,
    /**
     * Hide on large devices
     */
    lg: PropTypes.bool,
    /**
     * Hide on xlarge devices
     */
    xl: PropTypes.bool,
  };

  static contextTypes = {
    serverSideScreenClass: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    breakpoints: PropTypes.arrayOf(PropTypes.number),
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
