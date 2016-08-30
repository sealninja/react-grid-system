/* global document */
/* eslint no-console: "off" */

import React from 'react';
import { render } from 'react-dom';

import ExampleComponent from './index';

render(
  <ExampleComponent />,
  document.getElementById('app'),
  () => {
    console.info('react-grid-system example rendered client-side.');
  }
);
