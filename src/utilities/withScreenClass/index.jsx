/* global window */

import React from 'react';
import throttle from 'lodash/throttle';
import { getConfiguration } from '../../config';
import { getScreenClass } from '../../utils';

export default function withScreenClass(Component) {
  class WithScreenClass extends React.Component {
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
      <Component screenClass={this.state.screenClass} {...this.props} />
    );
  }

  WithScreenClass.displayName = `WithScreenClass(${Component.displayName || Component.name || 'Component'})`;

  return WithScreenClass;
}
