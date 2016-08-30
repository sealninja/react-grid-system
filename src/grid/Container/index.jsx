/* global window */

import React from 'react';
import getStyle from './style.css.js';
import { getViewPort } from '../../util';

export default class Container extends React.Component {
  static propTypes = {
    /**
     * Content of the component
     */
    children: React.PropTypes.node,
    /**
     * True makes the container full-width, false fixed-width
     */
    fluid: React.PropTypes.bool,
    /**
     * Optional styling
     */
    style: React.PropTypes.object,
  };

  static contextTypes = {
    phone: React.PropTypes.bool,
    tablet: React.PropTypes.bool,
    breakpoints: React.PropTypes.arrayOf(React.PropTypes.number),
    containerWidths: React.PropTypes.arrayOf(React.PropTypes.number),
  };

  static defaultProps = {
    fluid: false,
  };

  componentWillMount = () => {
    this.setViewport();
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.setViewport);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.setViewport);
  }

  setViewport = () => {
    this.setState({ viewport: getViewPort(this.context) });
  }

  render = () => {
    const style = getStyle({
      fluid: this.props.fluid,
      viewport: this.state.viewport,
      breakpoints: this.context.breakpoints,
      containerWidths: this.context.containerWidths,
    });
    return (
      <div style={{ ...style, ...this.props.style }}>
        {this.props.children}
      </div>
    );
  }
}
