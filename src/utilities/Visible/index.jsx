/* global window */

import React from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';
import * as style from './style';
import { getConfiguration } from '../../config';
import { getScreenClass } from '../../utils';

export default class Visible extends React.Component {
  static propTypes = {
    /**
     * Content of the component
     */
    children: PropTypes.node.isRequired,
    /**
     * Show on extra small devices
     */
    xs: PropTypes.bool,
    /**
     * Show on small devices
     */
    sm: PropTypes.bool,
    /**
     * Show on medium devices
     */
    md: PropTypes.bool,
    /**
     * Show on large devices
     */
    lg: PropTypes.bool,
    /**
     * Show on xl devices
     */
    xl: PropTypes.bool,
  };

  static defaultProps = {
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      screenClass: getConfiguration().defaultScreenClass,
    };
  }

  componentDidMount = () => {
    this.setScreenClass();
    this.eventListener = throttle(this.setScreenClass, 100);
    window.addEventListener('resize', this.eventListener);
  }

  componentWillUnmount = () => {
    this.eventListener.cancel();
    window.removeEventListener('resize', this.eventListener);
  }

  setScreenClass = () => {
    this.setState({ screenClass: getScreenClass() });
  }

  render = () => {
    if (!style.visible({
      screenClass: this.state.screenClass,
      xs: this.props.xs,
      sm: this.props.sm,
      md: this.props.md,
      lg: this.props.lg,
      xl: this.props.xl,
    })) return false;
    return (
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    );
  }
}
