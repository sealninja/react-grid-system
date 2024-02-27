import React from "react";
import PropTypes from "prop-types";
import * as style from "./style";
import ScreenClassResolver from "../../context/ScreenClassResolver";

const Visible = ({
  children,
  xs = false,
  sm = false,
  md = false,
  lg = false,
  xl = false,
  xxl = false,
  xxxl = false,
}) => (
  <ScreenClassResolver>
    {(screenClass) =>
      !style.visible({
        screenClass,
        xs,
        sm,
        md,
        lg,
        xl,
        xxl,
        xxxl,
      })
        ? null
        : children
    }
  </ScreenClassResolver>
);

Visible.propTypes = {
  /**
   * Content of the component
   */
  children: PropTypes.node.isRequired,
  /**
   * Show on extra small devices
   */
  xs: PropTypes.bool,
  /**
   * Show on small devices
   */
  sm: PropTypes.bool,
  /**
   * Show on medium devices
   */
  md: PropTypes.bool,
  /**
   * Show on large devices
   */
  lg: PropTypes.bool,
  /**
   * Show on xlarge devices
   */
  xl: PropTypes.bool,
  /**
   * Show on xxlarge devices
   */
  xxl: PropTypes.bool,
  /**
   * Show on xxxlarge devices
   */
  xxxl: PropTypes.bool,
};

export default Visible;
