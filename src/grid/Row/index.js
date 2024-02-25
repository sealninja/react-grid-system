import React from "react";
import PropTypes from "prop-types";
import { getConfiguration } from "../../config";
import getStyle from "./style";
import { Div } from "../../primitives";

export const GutterWidthContext = React.createContext(false);

const Row = React.forwardRef(
  (
    {
      children,
      style = {},
      align = "normal",
      justify = "start",
      wrap = "wrap",
      debug = false,
      nogutter = false,
      gutterWidth = null,
      component = Div,
      direction = "row",
      ...otherProps
    },
    ref
  ) => {
    let theGutterWidth = getConfiguration().gutterWidth;
    if (nogutter) theGutterWidth = 0;
    if (typeof gutterWidth === "number") theGutterWidth = gutterWidth;
    const theStyle = getStyle({
      gutterWidth: theGutterWidth,
      align,
      justify,
      debug,
      moreStyle: style,
      direction,
      wrap,
    });
    return React.createElement(
      component,
      { ref, style: theStyle, ...otherProps },
      <GutterWidthContext.Provider value={theGutterWidth}>
        {children}
      </GutterWidthContext.Provider>
    );
  }
);

Row.propTypes = {
  /**
   * Content of the element
   */
  children: PropTypes.node.isRequired,
  /**
   * Vertical column alignment
   */
  align: PropTypes.oneOf(["normal", "start", "center", "end", "stretch"]),
  /**
   * Horizontal column alignment
   */
  justify: PropTypes.oneOf([
    "start",
    "center",
    "end",
    "between",
    "around",
    "initial",
    "inherit",
  ]),
  /**
   * flex-direction style attribute
   */
  direction: PropTypes.oneOf([
    "column",
    "row",
    "column-reverse",
    "row-reverse",
  ]),
  /**
   * flex-wrap style attribute
   */
  wrap: PropTypes.oneOf(["nowrap", "wrap", "reverse"]),
  /**
   * No gutter for this row
   */
  nogutter: PropTypes.bool,
  /**
   * Custom gutter width for this row
   */
  gutterWidth: PropTypes.number,
  /**
   * Optional styling
   */
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
  /**
   * Set to apply some debug styling
   */
  debug: PropTypes.bool,
  /**
   * Use your own component
   */
  component: PropTypes.elementType,
};

Row.displayName = "Row";

export default Row;
