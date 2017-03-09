import React from 'react';
import Visible from '../Visible';
import { getAfterStyle, getAfterContentStyle } from './style';

export default class ClearFix extends React.Component {
  static propTypes = {
    /**
     * Show on extra small devices
     */
    xs: React.PropTypes.bool,
    /**
     * Show on small devices
     */
    sm: React.PropTypes.bool,
    /**
     * Show on medium devices
     */
    md: React.PropTypes.bool,
    /**
     * Show on large devices
     */
    lg: React.PropTypes.bool,
    /**
     * Show on xl devices
     */
    xl: React.PropTypes.bool,
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
