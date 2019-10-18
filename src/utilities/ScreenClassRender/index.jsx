import React from 'react';
import PropTypes from 'prop-types';
import ScreenClassResolver from '../../context/ScreenClassResolver';

export default class ScreenClassRender extends React.PureComponent {
  render = () => (
    <ScreenClassResolver>
      {(screenClass) => this.props.render(screenClass)}
    </ScreenClassResolver>
  );
}

ScreenClassRender.propTypes = {
  /**
   * The function which return value will be rendered.
   * Will be called with one argument: the screen class.
   */
  render: PropTypes.func.isRequired,
};
