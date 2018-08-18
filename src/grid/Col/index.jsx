/* global window */

import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';
import getStyle from './style';
import { getConfiguration } from '../../config';
import { getScreenClass } from '../../utils';
import { NoGutterContext } from '../Row';

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
    /**
     * Use your own component
     */
    component: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string,
    ]),
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
    component: 'div',
  }

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

  renderCol = (nogutter) => {
    const {
      children, xs, sm, md, lg, xl, offset, pull, push, debug, style, component,
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
      gutterWidth: nogutter ? 0 : getConfiguration().gutterWidth,
      gridColumns: getConfiguration().gridColumns,
      moreStyle: style,
    });
    return createElement(component, { style: theStyle, ...otherProps, children });
  };

  render = () => (
    <NoGutterContext.Consumer>
      {nogutter => this.renderCol(nogutter)}
    </NoGutterContext.Consumer>
  );
}
