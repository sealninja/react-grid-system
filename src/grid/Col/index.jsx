/* global window */

import React from 'react';
import { throttle } from 'lodash';
import getStyle from './style.css';
import { getScreenClass } from '../../utils';

export default class Col extends React.Component {
  static propTypes = {
    /**
     * Content of the column
     */
    children: React.PropTypes.node,
    /**
     * The width of the column for screenclass `xs`, between 0 and 12
     */
    xs: React.PropTypes.number,
    /**
     * The width of the column for screenclass `sm`, between 0 and 12
     */
    sm: React.PropTypes.number,
    /**
     * The width of the column for screenclass `md`, between 0 and 12
     */
    md: React.PropTypes.number,
    /**
     * The width of the column for screenclass `lg`, between 0 and 12
     */
    lg: React.PropTypes.number,
    /**
     * The width of the column for screenclass `xl`, between 0 and 12
     */
    xl: React.PropTypes.number,
    /**
     * The offset of this column for all screenclasses
     */
    offset: React.PropTypes.shape({
      xs: React.PropTypes.number,
      sm: React.PropTypes.number,
      md: React.PropTypes.number,
      lg: React.PropTypes.number,
      xl: React.PropTypes.number,
    }),
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

  static defaultProps = {
    children: null,
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12,
    offset: {},
    style: {},
  }

  static contextTypes = {
    phone: React.PropTypes.bool,
    tablet: React.PropTypes.bool,
    serverSideScreenClass: React.PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    breakpoints: React.PropTypes.arrayOf(React.PropTypes.number),
    gutterWidth: React.PropTypes.number,
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
    const { children, xs, sm, md, lg, xl, offset, style, ...otherProps } = this.props;
    const theStyle = getStyle({
      width: { xs, sm, md, lg, xl },
      offset,
      screenClass: this.state.screenClass,
      gutterWidth: this.context.gutterWidth,
      moreStyle: style,
    });
    return (
      <div style={theStyle} {...otherProps}>
        {children}
      </div>
    );
  };
}
