import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import getStyle from './style';
import { getConfiguration } from '../../config';
import { GutterWidthContext } from '../Row';
import ScreenClassResolver from '../../context/ScreenClassResolver';
import { Div } from '../../primitives'

const Col = ({
  children,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  offset,
  pull,
  push,
  debug,
  style,
  component,
  width,
  ...otherProps
}) => (
  <ScreenClassResolver>
    {(screenClass) => (
      <GutterWidthContext.Consumer>
        {(gutterWidth) => {
          const theStyle = getStyle({
            forceWidth: width,
            width: {
              xs,
              sm,
              md,
              lg,
              xl,
              xxl,
            },
            offset,
            pull,
            push,
            debug,
            screenClass,
            gutterWidth,
            gridColumns: getConfiguration().gridColumns,
            moreStyle: style,
          });
          return createElement(component, { style: theStyle, ...otherProps, children });
        }}
      </GutterWidthContext.Consumer>
    )}
  </ScreenClassResolver>
);

Col.propTypes = {
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
   * The width of the column for screenclass `xxl`, either a number between 0 and 12, or "content"
   */
  xxl: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(['content']),
  ]),
  /**
   * A fixed width of the column for all screenclasses"
   */
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
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
    xxl: PropTypes.number,
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
    xxl: PropTypes.number,
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
    xxl: PropTypes.number,
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

Col.defaultProps = {
  children: null,
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null,
  xxl: null,
  width: null,
  offset: {},
  push: {},
  pull: {},
  style: {},
  debug: false,
  component: Div,
};

export default Col;
