/* global window */

import React, { PureComponent } from 'react';
import throttle from 'lodash/throttle';
import PropTypes from 'prop-types';
import { getScreenClass } from '../../utils';
import { getConfiguration } from '../../config';

export const ScreenClassContext = React.createContext();

export default class ScreenClassProvider extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      screenClass: getConfiguration().defaultScreenClass,
    };

    this.setScreenClass = this.setScreenClass.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.setScreenClass();
    this.eventListener = throttle(this.handleResize, 100);
    window.addEventListener('resize', this.eventListener, false);
  }

  componentWillUnmount() {
    this.eventListener.cancel();
    window.addEventListener('resize', this.eventListener, false);
  }

  setScreenClass() {
    console.log('SetScreenClass');
    const currScreenClass = getScreenClass();
    if (currScreenClass !== this.state.screenClass) {
      this.setState({ screenClass: currScreenClass });
    }
  }

  handleResize() {
    if (window.requestAnimationFrame) {
      window.requestAnimationFrame(this.setScreenClass);
    }
  }

  render() {
    const { children } = this.props;

    return (
      <ScreenClassContext.Provider value={this.state.screenClass}>
        {children}
      </ScreenClassContext.Provider>
    );
  }
}
