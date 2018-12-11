import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import getStyle from './style';
import { getConfiguration } from '../../config';
import { NoGutterContext } from '../Row';
import ScreenClassResolver from '../../context/ScreenClassResolver';

export default class Col extends React.PureComponent {
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
    style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
    /**
     * Set to apply some debug styling
     */
    debug: PropTypes.bool,
    /**
     * Use your own component
     */
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
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
  };

  renderCol = (nogutter, screenClass) => {
    const {
      children,
      xs,
      sm,
      md,
      lg,
      xl,
      offset,
      pull,
      push,
      debug,
      style,
      component,
      ...otherProps
    } = this.props;
    const theStyle = getStyle({
      width: {
        xs,
        sm,
        md,
        lg,
        xl,
      },
      offset,
      pull,
      push,
      debug,
      screenClass,
      gutterWidth: nogutter ? 0 : getConfiguration().gutterWidth,
      gridColumns: getConfiguration().gridColumns,
      moreStyle: style,
    });
    return createElement(component, { style: theStyle, ...otherProps, children });
  };

  render = () => (
    <ScreenClassResolver>
      {screenClass => (
        <NoGutterContext.Consumer>
          {nogutter => this.renderCol(nogutter, screenClass)}
        </NoGutterContext.Consumer>
      )}
    </ScreenClassResolver>
  );
}
