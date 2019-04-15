import React from 'react';
import PropTypes from 'prop-types';
import { getConfiguration } from '../../config';
import getStyle from './style';

export const NoGutterContext = React.createContext(false);

export default class Row extends React.PureComponent {
  static propTypes = {
    /**
     * Content of the element
     */
    children: PropTypes.node.isRequired,
    /**
     * Vertical column alignment
     */
    align: PropTypes.oneOf(['normal', 'start', 'center', 'end', 'stretch']),
    /**
     * Horizontal column alignment
     */
    justify: PropTypes.oneOf([
      'start',
      'center',
      'end',
      'between',
      'around',
      'initial',
      'inherit',
    ]),
    /**
     * No gutter for this row
     */
    nogutter: PropTypes.bool,
    /**
     * Optional styling
     */
    style: PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    ),
    /**
     * Set to apply some debug styling
     */
    debug: PropTypes.bool,
    /**
     * Use your own component
     */
    component: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string,
    ]),
  };

  static defaultProps = {
    align: 'normal',
    justify: 'start',
    nogutter: false,
    style: {},
    debug: false,
    component: 'div',
  };

  render = () => {
    const {
      children,
      style,
      align,
      justify,
      debug,
      nogutter,
      component,
      ...otherProps
    } = this.props;
    const theStyle = getStyle({
      gutterWidth: nogutter ? 0 : getConfiguration().gutterWidth,
      align,
      justify,
      debug,
      moreStyle: style,
    });
    return React.createElement(
      component,
      { style: theStyle, ...otherProps },
      <NoGutterContext.Provider value={nogutter}>
        {children}
      </NoGutterContext.Provider>,
    );
  };
}
