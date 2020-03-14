import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScreenClassProvider, { ScreenClassContext, NO_PROVIDER_FLAG } from '../ScreenClassProvider';

export default class ScreenClassResolver extends Component {
  render() {
    const { children } = this.props;
    return (
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
  }
}

ScreenClassResolver.propTypes = {
  children: PropTypes.func.isRequired,
};
