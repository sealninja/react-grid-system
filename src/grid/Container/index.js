import React from 'react';
import getStyle from './style.css.js';

export default class Container extends React.Component {
  static propTypes = {
    /**
     * Content of the element
     */
    children: React.PropTypes.node,
    /**
     * True makes the container full-width, false fixed-width
     */
    fluid: React.PropTypes.bool,
    style: React.PropTypes.object,
    onClick: React.PropTypes.func,
  };

  static contextTypes = {
    phone: React.PropTypes.bool,
    tablet: React.PropTypes.bool,
  };

  static defaultProps = {
    fluid: false,
  };

  componentWillMount = () => {
    this.setViewport();
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.setViewport);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.setViewPort);
  }

  setViewport = () => {
    let viewport = 1600;
    if (this.context.tablet) viewport = 900;
    if (this.context.phone) viewport = 600;
    if (typeof window !== 'undefined' && window.innerWidth) {
      viewport = window.innerWidth;
    }
    this.setState({ viewport });
  }

  handleClick = (e) => {
    if (this.props.onClick) this.props.onClick(e);
  }

  render = () => {
    const style = getStyle({
      fluid: this.props.fluid,
      viewport: this.state.viewport,
    });
    return (
      <div style={{ ...style, ...this.props.style }} onClick={this.handleClick}>
        {this.props.children}
      </div>
    );
  }
}
