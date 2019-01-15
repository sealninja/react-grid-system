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
    /**
     * Boolean to determine whether own width should be used as source.
     * When provided, the screen class is derived from own dimensions instead of the window.
     */
    useOwnWidth: PropTypes.bool,
  };

  static defaultProps = {
    useOwnWidth: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      screenClass: getConfiguration().defaultScreenClass,
    };

    this.screenClassRef = React.createRef();
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
    const { useOwnWidth } = this.props;

    const source = useOwnWidth && this.screenClassRef && this.screenClassRef.current;
    const currScreenClass = getScreenClass(source);
    if (currScreenClass !== this.state.screenClass) {
      this.setState({ screenClass: currScreenClass });
    }
  }

  render() {
    const { screenClass } = this.state;
    const { children, useOwnWidth } = this.props;

    return (
      <ScreenClassContext.Provider value={screenClass}>
        {useOwnWidth
          ? <div ref={this.screenClassRef}>{children}</div>
          : <React.Fragment>{children}</React.Fragment>
        }
      </ScreenClassContext.Provider>
    );
  }
}
