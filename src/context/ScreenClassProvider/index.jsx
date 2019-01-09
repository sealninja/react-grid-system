/* global window */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getScreenClass } from '../../utils';
import { getConfiguration } from '../../config';

export const NO_PROVIDER_FLAG = 'NO_PROVIDER_FLAG';

export const ScreenClassContext = React.createContext(NO_PROVIDER_FLAG);

export default class ScreenClassProvider extends PureComponent {
  static propTypes = {
    /**
     * Children of the ScreenClassProvider.
     * This should be all your child React nodes that are using `react-grid-system`.
     */
    children: PropTypes.node.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      screenClass: getConfiguration().defaultScreenClass,
    };

    this.setScreenClass = this.setScreenClass.bind(this);
  }

  componentDidMount() {
    this.setScreenClass();
    window.addEventListener('resize', this.setScreenClass, false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setScreenClass, false);
  }

  setScreenClass() {
    const currScreenClass = getScreenClass();
    if (currScreenClass !== this.state.screenClass) {
      this.setState({ screenClass: currScreenClass });
    }
  }

  render() {
    const { screenClass } = this.state;
    const { children } = this.props;

    return (
      <ScreenClassContext.Provider value={screenClass}>{children}</ScreenClassContext.Provider>
    );
  }
}
