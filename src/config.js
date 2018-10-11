import React from 'react'

export const ScreenContext = React.createContext()

export function ScreenContextConsumer(WrappedComponent) {

  return class C extends React.Component {
    render() {
      return (
        <ScreenContext.Consumer>
          {rect => <WrappedComponent rect={rect} {...this.props} />}
        </ScreenContext.Consumer>
      )
    }
  }
}

let configuration = {
  breakpoints       : [576, 768, 992, 1200],
  containerWidths   : [540, 750, 960, 1140],
  gutterWidth       : 30,
  gridColumns       : 12,
  defaultScreenClass: 'xl',
};

export const getConfiguration = () => configuration;

export const setConfiguration = (newConfiguration) => {
  configuration = { ...configuration, ...newConfiguration };
};
