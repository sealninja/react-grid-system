/* global window */
/* eslint no-console: off */

import React from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';
import { getConfiguration } from '../../config';
import { getScreenClass } from '../../utils';

export default class ScreenClassRender extends React.Component {
  static propTypes = {
    /**
     * The function which return value will be rendered.
     * Will be called with one argument: the screen class.
     */
    render: PropTypes.func.isRequired,
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

  render = () => (
    <React.Fragment>
      {this.props.render(this.state.screenClass)}
    </React.Fragment>
  );
}
