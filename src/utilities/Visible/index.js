import React from 'react';
import PropTypes from 'prop-types';
import * as style from './style';
import ScreenClassResolver from '../../context/ScreenClassResolver';

const Visible = ({
  children,
  xs,
  sm,
  md,
  lg,
  xl,
}) => (
  <ScreenClassResolver>
    {(screenClass) => (!style.visible({
      screenClass,
      xs,
      sm,
      md,
      lg,
      xl,
    })
      ? null
      : children)}
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
   * Show on xl devices
   */
  xl: PropTypes.bool,
};

Visible.defaultProps = {
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
};

export default Visible;
