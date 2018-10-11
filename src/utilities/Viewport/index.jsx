/* global window */
/* eslint no-console: off */

import React from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';
import { getConfiguration, ScreenContext } from '../../config';
import { getScreenClass as getDefaultScreenClass } from '../../utils';
import ResizeObserver from 'resize-observer-polyfill'

export default class Viewport extends React.Component {
  static propTypes = {
    /**
     * 
     */
  };

  state = {
    top   : 0,
    left  : 0,
    width : 0,
    height: 0,
    isSet : false,
  }

  constructor(props, context) {
    super(props, context)
    this.ElementId = `VP${Date.now()}${Math.floor(Math.random()*10000000)}`
  }

  componentDidMount = () => {
    this.resizeObserver = new ResizeObserver(entries => {
      var e = entries && entries[0]
      if (!e) return;
      const { top, left, width, height } = e.contentRect
      this.setState({ top, left, width, height, isSet: true })
    })
    this.resizeObserver.observe(document.querySelector("#"+this.ElementId))
  }

  componentWillUnmount = () => {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect()
    }
  }

  render = () => (
    <div id={this.ElementId} {...this.props}>
      <ScreenContext.Provider value={this.state}>
        {this.props.children}
      </ScreenContext.Provider>
    </div>
  );
}
