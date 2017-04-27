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
     * Optional styling
     */
    style: PropTypes.objectOf(
       PropTypes.oneOfType([
         PropTypes.number,
         PropTypes.string,
       ]),
     ),
  };

  static defaultProps = {
    style: {},
  }

  static contextTypes = {
    gutterWidth: PropTypes.number,
  };

  render = () => {
    const { children, style, ...otherProps } = this.props;
    const theStyle = getStyle({
      gutterWidth: this.context.gutterWidth,
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
