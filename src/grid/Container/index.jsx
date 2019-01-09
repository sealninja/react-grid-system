import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import getStyle, { getAfterStyle } from './style';
import { getConfiguration } from '../../config';
import ScreenClassResolver from '../../context/ScreenClassResolver';

export default class Container extends React.PureComponent {
  static propTypes = {
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
     * Optional styling
     */
    style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
    /**
     * Use your own component
     */
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  };

  static defaultProps = {
    fluid: false,
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    style: {},
    component: 'div',
  };

  render() {
    const {
      children, fluid, xs, sm, md, lg, xl, style, component, ...otherProps
    } = this.props;

    return (
      <ScreenClassResolver>
        {screenClass => createElement(
          component,
          {
            style: getStyle({
              fluid,
              xs,
              sm,
              md,
              lg,
              xl,
              screenClass: screenClass || this.state.screenClass,
              containerWidths: getConfiguration().containerWidths,
              gutterWidth: getConfiguration().gutterWidth,
              moreStyle: style,
            }),
            ...otherProps,
          },
          <React.Fragment>
            {children}
            <span style={getAfterStyle()} />
          </React.Fragment>,
        )
        }
      </ScreenClassResolver>
    );
  }
}
