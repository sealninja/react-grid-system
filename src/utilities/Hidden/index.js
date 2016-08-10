import React from 'react';
import * as style from './style.css.js';
import { getViewPort } from '../../util';

export default class Hidden extends React.Component {
  static propTypes = {
    /**
     * Content of the component
     */
    children: React.PropTypes.element,
    /**
     * Hide on extra small devices
     */
    xs: React.PropTypes.bool,
    /**
     * Hide on small devices
     */
    sm: React.PropTypes.bool,
    /**
     * Hide on medium devices
     */
    md: React.PropTypes.bool,
    /**
     * Hide on large devices
     */
    lg: React.PropTypes.bool,
  };

  static contextTypes = {
    phone: React.PropTypes.bool,
    tablet: React.PropTypes.bool,
  };

  static defaultProps = {
    xs: false,
    sm: false,
    md: false,
    lg: false,
  };

  componentWillMount = () => {
    this.setViewport();
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.setViewport);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.setViewport);
  }

  setViewport = () => {
    this.setState({ viewport: getViewPort(this.context) });
  }

  render = () => {
    if (style.hidden({
      viewport: this.state.viewport,
      xs: this.props.xs,
      sm: this.props.sm,
      md: this.props.md,
      lg: this.props.lg,
    })) return false;
    return this.props.children;
  }
}
