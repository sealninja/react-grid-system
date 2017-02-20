/* global window */

import React from 'react';
import { throttle } from 'lodash';
import getStyle, { getAfterStyle } from './style.css';
import { getScreenClass } from '../../utils';

export default class Container extends React.Component {
  static propTypes = {
    /**
     * Content of the component
     */
    children: React.PropTypes.node.isRequired,
    /**
     * True makes the container full-width, false fixed-width
     */
    fluid: React.PropTypes.bool,
    /**
     * Optional styling
     */
    style: React.PropTypes.objectOf(
       React.PropTypes.oneOfType([
         React.PropTypes.number,
         React.PropTypes.string,
       ]),
     ),
  };

  static contextTypes = {
    phone: React.PropTypes.bool,
    tablet: React.PropTypes.bool,
    serverSideScreenClass: React.PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    breakpoints: React.PropTypes.arrayOf(React.PropTypes.number),
    containerWidths: React.PropTypes.arrayOf(React.PropTypes.number),
    gutterWidth: React.PropTypes.number,
  };

  static defaultProps = {
    fluid: false,
    style: {},
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
    const { children, fluid, style, ...otherProps } = this.props;
    const theStyle = getStyle({
      fluid,
      screenClass: this.state.screenClass,
      containerWidths: this.context.containerWidths,
      gutterWidth: this.context.gutterWidth,
      moreStyle: style,
    });
    return (
      <div style={theStyle} {...otherProps}>
        {children}
        <span style={getAfterStyle()} />
      </div>
    );
  }
}
