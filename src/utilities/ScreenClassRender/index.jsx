import React from 'react';
import PropTypes from 'prop-types';
import ScreenClassResolver from '../../context/ScreenClassResolver';

export default class ScreenClassRender extends React.PureComponent {
  static propTypes = {
    /**
     * The function which return value will be rendered.
     * Will be called with one argument: the screen class.
     */
    render: PropTypes.func.isRequired,
  };

  render = () => (
    <ScreenClassResolver>
      {screenClass => this.props.render(screenClass)}
    </ScreenClassResolver>
  );
}
