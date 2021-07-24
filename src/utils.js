/* global window */

import { useState, useEffect } from 'react';
import { getConfiguration } from './config';
import { Window } from './primitives'

const getViewPort = (source) => {
  if (source && source.current && source.current.clientWidth) {
    return source.current.clientWidth;
  }
  if (typeof Window !== 'undefined' && Window.innerWidth) {
    return Window.innerWidth;
  }
  return null;
};

export const screenClasses = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

export const useScreenClass = (source, fallbackScreenClass) => {
  const getScreenClass = () => {
    const { breakpoints, defaultScreenClass, maxScreenClass } = getConfiguration();

    let newScreenClass = defaultScreenClass;

    const viewport = getViewPort(source);
    if (viewport) {
      newScreenClass = 'xs';
      if (breakpoints[0] && viewport >= breakpoints[0]) newScreenClass = 'sm';
      if (breakpoints[1] && viewport >= breakpoints[1]) newScreenClass = 'md';
      if (breakpoints[2] && viewport >= breakpoints[2]) newScreenClass = 'lg';
      if (breakpoints[3] && viewport >= breakpoints[3]) newScreenClass = 'xl';
      if (breakpoints[4] && viewport >= breakpoints[4]) newScreenClass = 'xxl';
    } else if (fallbackScreenClass) {
      newScreenClass = fallbackScreenClass;
    }

    const newScreenClassIndex = screenClasses.indexOf(newScreenClass);
    const maxScreenClassIndex = screenClasses.indexOf(maxScreenClass);
    if (maxScreenClassIndex >= 0 && newScreenClassIndex > maxScreenClassIndex) {
      newScreenClass = screenClasses[maxScreenClassIndex];
    }

    return newScreenClass;
  };

  const [screenClass, setScreenClass] = useState(() => getScreenClass());


  useEffect(() => {
    const handleWindowResized = () => setScreenClass(getScreenClass());

    Window.addEventListener('resize', handleWindowResized, false);

    return () => {
      Window.removeEventListener('resize', handleWindowResized, false);
    };
  }, []);

  return screenClass;
};
