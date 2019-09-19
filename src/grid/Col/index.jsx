import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import getStyle from './style';
import { GutterWidthContext } from '../Row';
import ScreenClassResolver from '../../context/ScreenClassResolver';
import { CustomGridColumnsContext } from '../Container';

export default class Col extends React.PureComponent {
  static propTypes = {
    /**
     * Content of the column
     */
    children: PropTypes.node,
    /**
     * The width of the column for screenclass `xs`, either a number between 0 and 12, or "content"
     */
    xs: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf(['content']),
    ]),
    /**
     * The width of the column for screenclass `sm`, either a number between 0 and 12, or "content"
     */
    sm: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf(['content']),
    ]),
    /**
     * The width of the column for screenclass `md`, either a number between 0 and 12, or "content"
     */
    md: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf(['content']),
    ]),
    /**
     * The width of the column for screenclass `lg`, either a number between 0 and 12, or "content"
     */
    lg: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf(['content']),
    ]),
    /**
     * The width of the column for screenclass `xl`, either a number between 0 and 12, or "content"
     */
    xl: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf(['content']),
    ]),
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
    component: PropTypes.elementType,
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

  renderCol = (gutterWidth, screenClass, gridColumns) => {
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
      gutterWidth,
      gridColumns,
      moreStyle: style,
    });
    return createElement(component, { style: theStyle, ...otherProps, children });
  };

  render = () => (
    <ScreenClassResolver>
      {screenClass => (
        <CustomGridColumnsContext.Consumer>
          {gridColumns => (
            <GutterWidthContext.Consumer>
              {gutterWidth => this.renderCol(gutterWidth, screenClass, gridColumns)}
            </GutterWidthContext.Consumer>
          )}
        </CustomGridColumnsContext.Consumer>
      )}
    </ScreenClassResolver>
  );
}
