import React from 'react';
import PropTypes from 'prop-types';
import { useScreenClass } from '../../utils';

export const NO_PROVIDER_FLAG = 'NO_PROVIDER_FLAG';

export const ScreenClassContext = React.createContext(NO_PROVIDER_FLAG);

export default function ScreenClassProvider(props) {
  const screenClassRef = React.createRef();
  const { useOwnWidth, children } = props;
  const screenClass = useScreenClass(screenClassRef);

  return (
    <ScreenClassContext.Provider value={screenClass}>
      {useOwnWidth
        ? <div ref={useOwnWidth ? screenClassRef : null}>{children}</div>
        : <>{children}</>}
    </ScreenClassContext.Provider>
  );
}

ScreenClassProvider.propTypes = {
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

ScreenClassProvider.defaultProps = {
  useOwnWidth: false,
};
