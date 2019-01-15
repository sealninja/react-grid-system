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
     * Boolean to determine wether self should be used as source.
     * When provided, screen class is derived from self instead of the window.
     */
    useSelfAsSource: PropTypes.bool,
  };

  static defaultProps = {
    useSelfAsSource: false,
  };

  constructor(props) {
    super(props);

    this.screenClassRef = React.createRef();
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
    const { useSelfAsSource } = this.props;

    if (useSelfAsSource) {
      console.log(this.screenClassRef);
    }

    const source = useSelfAsSource && this.screenClassRef ? this.screenClassRef.current : undefined;
    const currScreenClass = getScreenClass({ source });
    if (currScreenClass !== this.state.screenClass) {
      this.setState({ screenClass: currScreenClass });
    }
  }

  render() {
    const { screenClass } = this.state;
    const { children, useSelfAsSource } = this.props;

    return (
      <ScreenClassContext.Provider value={screenClass}>
        {useSelfAsSource
          ? <div ref={this.screenClassRef}>{children}</div>
          : <React.Fragment>{children}</React.Fragment>
        }
      </ScreenClassContext.Provider>
    );
  }
}
