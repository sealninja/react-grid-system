import React from 'react';
import PropTypes from 'prop-types';
import getStyle from './style';
import ClearFix from '../../utilities/ClearFix';

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
    * Grow this row
    */
    grow: PropTypes.bool,
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
    grow: false,
    style: {},
    debug: false,
  }

  static contextTypes = {
    gutterWidth: PropTypes.number,
  };

  render = () => {
    const {
      children, style, align, grow, debug, ...otherProps
    } = this.props;
    const theStyle = getStyle({
      gutterWidth: this.context.gutterWidth,
      align,
      grow,
      debug,
      moreStyle: style,
    });
    return (
      <div style={theStyle} {...otherProps}>
        {children}
        <ClearFix xs sm md lg xl />
      </div>
    );
  }
}
