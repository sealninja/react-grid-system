# react-grid-system
A pure JS bootstrap-like grid system for React.

[![npm version](https://badge.fury.io/js/react-grid-system.svg)](https://badge.fury.io/js/react-grid-system)

## Installation

```
npm i react-grid-system --save
```

## Usage

Examples and documentation on how to use `react-grid-system` can be found at the GitHub pages:
https://zoover.github.io/react-grid-system/

## Server-side rendering

In case you're also using React components in server-side rendering, every component in this library has two context types properties which can be used for this:
`phone` and `tablet`. Both are booleans. The server can use the user-agent to determine whether the client is on a phone or tablet, and set the child context accordingly. The components can then use this context to render properly.

For more information on using the user-agent to determine the device, see for example https://github.com/hgoebl/mobile-detect.js.

For more information about context in React, see for example https://facebook.github.io/react/docs/context.html.
