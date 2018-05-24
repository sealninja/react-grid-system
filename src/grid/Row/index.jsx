import React from 'react';
import PropTypes from 'prop-types';
import getStyle from './style';
import { getConfiguration } from '../../config';

export default class Row extends React.Component {
  static propTypes = {
    /**
     * Content of the element
     */
    children: PropTypes.node.isRequired,
    /**
    * Column alignment
    */
    align: PropTypes.oneOf(['normal', 'start', 'center', 'end']),
    /**
    * No gutter for this row
    */
    nogutter: PropTypes.bool,
    /**
    * Optional styling
    */
    style: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ])),
    /**
      * Set to apply some debug styling
      */
    debug: PropTypes.bool,
  };

  static defaultProps = {
    align: 'normal',
    nogutter: false,
    style: {},
    debug: false,
  }

  render = () => {
    const {
      children, style, align, debug, nogutter, ...otherProps
    } = this.props;
    const theStyle = getStyle({
      gutterWidth: nogutter ? 0 : getConfiguration().gutterWidth,
      align,
      debug,
      moreStyle: style,
    });
    return (
      <div style={theStyle} {...otherProps}>
        {children}
      </div>
    );
  }
}
