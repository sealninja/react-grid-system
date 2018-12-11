import React from 'react';
import PropTypes from 'prop-types';
import * as style from './style';
import ScreenClassResolver from '../../context/ScreenClassResolver';

export default class Visible extends React.PureComponent {
  static propTypes = {
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

  static defaultProps = {
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
  };

  render = () => (
    <ScreenClassResolver>
      {screenClass => (!style.visible({
        screenClass,
        xs: this.props.xs,
        sm: this.props.sm,
        md: this.props.md,
        lg: this.props.lg,
        xl: this.props.xl,
      })
        ? null
        : this.props.children)
      }
    </ScreenClassResolver>
  );
}
