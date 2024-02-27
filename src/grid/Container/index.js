import React, { createElement } from "react";
import PropTypes from "prop-types";
import getStyle from "./style";
import { getConfiguration } from "../../config";
import ScreenClassResolver from "../../context/ScreenClassResolver";
import { Div } from "../../primitives";

const Container = React.forwardRef(
  (
    {
      children,
      fluid = false,
      xs = false,
      sm = false,
      md = false,
      lg = false,
      xl = false,
      xxl = false,
      xxxl = false,
      style = {},
      component = Div,
      ...otherProps
    },
    ref
  ) => (
    <ScreenClassResolver>
      {(screenClass) =>
        createElement(
          component,
          {
            ref,
            style: getStyle({
              fluid,
              xs,
              sm,
              md,
              lg,
              xl,
              xxl,
              xxxl,
              screenClass,
              containerWidths: getConfiguration().containerWidths,
              gutterWidth: getConfiguration().gutterWidth,
              moreStyle: style,
            }),
            ...otherProps,
          },
          children
        )
      }
    </ScreenClassResolver>
  )
);

Container.propTypes = {
  /**
   * Content of the component
   */
  children: PropTypes.node.isRequired,
  /**
   * True makes the container full-width, false fixed-width
   */
  fluid: PropTypes.bool,
  /**
   * This is in combination with fluid enabled
   * True makes container fluid only in xs, not present means fluid everywhere
   */
  xs: PropTypes.bool,
  /**
   * This is in combination with fluid enabled
   * True makes container fluid only in sm, not present means fluid everywhere
   */
  sm: PropTypes.bool,
  /**
   * This is in combination with fluid enabled
   * True makes container fluid only in md, not present means fluid everywhere
   */
  md: PropTypes.bool,
  /**
   * This is in combination with fluid enabled
   * True makes container fluid only in lg, not present means fluid everywhere
   */
  lg: PropTypes.bool,
  /**
   * This is in combination with fluid enabled
   * True makes container fluid only in xl, not present means fluid everywhere
   */
  xl: PropTypes.bool,
  /**
   * This is in combination with fluid enabled
   * True makes container fluid only in xxl, not present means fluid everywhere
   */
  xxl: PropTypes.bool,
  /**
   * This is in combination with fluid enabled
   * True makes container fluid only in xxxl, not present means fluid everywhere
   */
  xxxl: PropTypes.bool,
  /**
   * Optional styling
   */
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
  /**
   * Use your own component
   */
  component: PropTypes.elementType,
};

Container.displayName = "Container";

export default Container;
