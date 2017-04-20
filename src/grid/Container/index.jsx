/* global window */

import React from 'react';
import throttle from 'lodash/throttle';
import getStyle, { getAfterStyle } from './style';
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
     * This is in combination with fluid enabled
     * True makes container fluid only in xs, not present means fluid everywhere
     */
    xs: React.PropTypes.bool,
    /**
     * This is in combination with fluid enabled
     * True makes container fluid only in sm, not present means fluid everywhere
     */
    sm: React.PropTypes.bool,
    /**
     * This is in combination with fluid enabled
     * True makes container fluid only in md, not present means fluid everywhere
     */
    md: React.PropTypes.bool,
    /**
     * This is in combination with fluid enabled
     * True makes container fluid only in lg, not present means fluid everywhere
     */
    lg: React.PropTypes.bool,
    /**
     * This is in combination with fluid enabled
     * True makes container fluid only in xl, not present means fluid everywhere
     */
    xl: React.PropTypes.bool,
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
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
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
    const { children, fluid, xs, sm, md, lg, xl, style, ...otherProps } = this.props;
    const theStyle = getStyle({
      fluid,
      xs,
      sm,
      md,
      lg,
      xl,
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
