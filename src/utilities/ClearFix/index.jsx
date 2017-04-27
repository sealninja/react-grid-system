import React from 'react';
import PropTypes from 'prop-types';
import Visible from '../Visible';
import { getAfterStyle, getAfterContentStyle } from './style';

export default class ClearFix extends React.Component {
  static propTypes = {
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
    <Visible
      xs={this.props.xs}
      sm={this.props.sm}
      md={this.props.md}
      lg={this.props.lg}
      xl={this.props.xl}
    >
      <div style={getAfterStyle()}><span style={getAfterContentStyle()}>&nbsp;</span></div>
    </Visible>
  );
}
