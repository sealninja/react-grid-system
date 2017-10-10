/* global window */

import React from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';
import getStyle from './style';
import { getScreenClass } from '../../utils';

export default class Col extends React.Component {
  static propTypes = {
    /**
     * Content of the column
     */
    children: PropTypes.node,
    /**
     * The width of the column for screenclass `xs`, between 0 and 12
     */
    xs: PropTypes.number,
    /**
     * The width of the column for screenclass `sm`, between 0 and 12
     */
    sm: PropTypes.number,
    /**
     * The width of the column for screenclass `md`, between 0 and 12
     */
    md: PropTypes.number,
    /**
     * The width of the column for screenclass `lg`, between 0 and 12
     */
    lg: PropTypes.number,
    /**
     * The width of the column for screenclass `xl`, between 0 and 12
     */
    xl: PropTypes.number,
    /**
     * The offset of this column for all screenclasses
     */
    offset: PropTypes.shape({
      xs: PropTypes.number,
      sm: PropTypes.number,
      md: PropTypes.number,
      lg: PropTypes.number,
      xl: PropTypes.number,
    }),
    /**
    * The amount this column is pushed to the right for all screenclasses
    */
    push: PropTypes.shape({
      xs: PropTypes.number,
      sm: PropTypes.number,
      md: PropTypes.number,
      lg: PropTypes.number,
      xl: PropTypes.number,
    }),
    /**
     * The amount this column is pulled to the left for all screenclasses
     */
    pull: PropTypes.shape({
      xs: PropTypes.number,
      sm: PropTypes.number,
      md: PropTypes.number,
      lg: PropTypes.number,
      xl: PropTypes.number,
    }),
    /**
     * Optional styling
     */
    style: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ])),
    /**
     * Set to apply some debug styling
     */
    debug: PropTypes.bool,
  };

  static defaultProps = {
    children: null,
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    offset: {},
    push: {},
    pull: {},
    style: {},
    debug: false,
  }

  static contextTypes = {
    serverSideScreenClass: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    breakpoints: PropTypes.arrayOf(PropTypes.number),
    gutterWidth: PropTypes.number,
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
    const {
      children, xs, sm, md, lg, xl, offset, pull, push, debug, style,
      ...otherProps
    } = this.props;
    const theStyle = getStyle({
      width: {
        xs, sm, md, lg, xl,
      },
      offset,
      pull,
      push,
      debug,
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
