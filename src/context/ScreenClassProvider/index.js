import React from 'react';
import PropTypes from 'prop-types';
import { useScreenClass } from '../../utils';

export const NO_PROVIDER_FLAG = 'NO_PROVIDER_FLAG';

export const ScreenClassContext = React.createContext(NO_PROVIDER_FLAG);

const ScreenClassProvider = ({ useOwnWidth, children, fallbackScreenClass }) => {
  const screenClassRef = React.createRef();
  const screenClass = useScreenClass(screenClassRef, fallbackScreenClass);

  return (
    <ScreenClassContext.Provider value={screenClass}>
      {useOwnWidth
        ? <div ref={useOwnWidth ? screenClassRef : null}>{children}</div>
        : <>{children}</>}
    </ScreenClassContext.Provider>
  );
};

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
  /**
   * Screen class to use when it cannot be determined otherwise.
   * Useful for server side rendering.
   */
  fallbackScreenClass: PropTypes.oneOf([null, 'xs', 'sm', 'md', 'lg', 'xl']),
};

ScreenClassProvider.defaultProps = {
  useOwnWidth: false,
  fallbackScreenClass: null,
};

export default ScreenClassProvider;
