/* global window */
/* eslint no-console: off */

import React from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';
import { getConfiguration, ScreenContext } from '../../config';
import { getScreenClass as getDefaultScreenClass } from '../../utils';
import ResizeObserver from 'resize-observer-polyfill'

export default class ScreenProvider extends React.Component {
  static propTypes = {
    /**
     * 
     */
    screenElement: PropTypes.func.isRequired,
  };

  state = {
    top   : 0,
    left  : 0,
    width : 0,
    height: 0,
    isSet : false,
  }

  componentDidMount = () => {
    if (this.props.screenElement) {
      this.resizeObserver = new ResizeObserver(entries => {
        var e = entries && entries[0]
        if (!e) return;
        this.setState({ ... e.contentRect, isSet: true })
      })
      this.resizeObserver.observe(this.props.screenElement)
    } else {
      this.resizer = () => {
        this.setState({
          top   : 0,
          left  : 0,
          width : window.innerWidth,
          height: window.innerHeight,
          isSet : true
        })
      }
      window.addEventListener('resize', this.resizer)
      this.resizer()
    }
  }

  componentWillUnmount = () => {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect()
    } else {
      window.removeEventListener('resize', this.resizer)
      delete this.resizer
    }
  }

  render = () => (
    <ScreenContext.Provider rect={this.state}>
      <ScreenContext.Consumer>
        {this.props.children}
      </ScreenContext.Consumer>
    </ScreenContext.Provider>
  );
}
