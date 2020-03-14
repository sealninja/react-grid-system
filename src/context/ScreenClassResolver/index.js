import React from 'react';
import PropTypes from 'prop-types';
import ScreenClassProvider, { ScreenClassContext, NO_PROVIDER_FLAG } from '../ScreenClassProvider';

const ScreenClassResolver = ({ children }) => (
  <ScreenClassContext.Consumer>
    {(screenClassCheck) => {
      if (screenClassCheck === NO_PROVIDER_FLAG) {
        return (
          <ScreenClassProvider>
            <ScreenClassContext.Consumer>
              {(screenClassResolved) => children(screenClassResolved)}
            </ScreenClassContext.Consumer>
          </ScreenClassProvider>
        );
      }
      return children(screenClassCheck);
    }}
  </ScreenClassContext.Consumer>
);

ScreenClassResolver.propTypes = {
  children: PropTypes.func.isRequired,
};

export default ScreenClassResolver;
