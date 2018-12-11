import React from 'react';
import PropTypes from 'prop-types';
import * as style from './style';
import ScreenClassResolver from '../../context/ScreenClassResolver';

export default class Hidden extends React.PureComponent {
  static propTypes = {
    /**
     * Content of the component
     */
    children: PropTypes.node.isRequired,
    /**
     * Hide on extra small devices
     */
    xs: PropTypes.bool,
    /**
     * Hide on small devices
     */
    sm: PropTypes.bool,
    /**
     * Hide on medium devices
     */
    md: PropTypes.bool,
    /**
     * Hide on large devices
     */
    lg: PropTypes.bool,
    /**
     * Hide on xlarge devices
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
      {screenClass => (style.hidden({
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
