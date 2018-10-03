import React from 'react';
import PropTypes from 'prop-types';
import { ScreenClassContext } from '../ScreenClassContext';

export default class ScreenClassRender extends React.PureComponent {
  static propTypes = {
    /**
     * The function which return value will be rendered.
     * Will be called with one argument: the screen class.
     */
    render: PropTypes.func.isRequired,
  };

  render = () => (
    <ScreenClassContext.Consumer>
      {screenClass => this.props.render(screenClass)}
    </ScreenClassContext.Consumer>
  );
}
