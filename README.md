# react-grid-system
A pure JS bootstrap-like responsive grid system for React.

[![npm version](https://badge.fury.io/js/react-grid-system.svg)](https://badge.fury.io/js/react-grid-system)

## Installation

```
npm install react-grid-system --save
```

## Responsive grid components

Three components are provided for creating responsive grids: `Container`, `Row`, and `Col`.

An example on how to use these:

```javascript
<Container>
  <Row>
    <Col xs={12} md={8}>xs=12 md=8</Col>
    <Col xs={6} md={4}>xs=6 md=4</Col>
  </Row>
</Container>
```

## Responsive utilities

Three components are provided for creating responsive grids: `Visible` and `Hidden`.

An example on how to use these:

```javascript
<Visible xs sm><div>Visible on extra small and small</div></Visible>
<Visible md lg><div>Visible on medium and large</div></Visible>
```

## Documentation

Live examples and documentation can be found at the GitHub pages: https://zoover.github.io/react-grid-system/

## Server-side rendering

In case you're also using React components in server-side rendering, every component in this library has two context types properties which can be used for this: `phone` and `tablet`. Both are booleans. The server can use the user-agent to determine whether the client is on a phone or tablet, and set the child context accordingly. The components will then use this context to render properly.

For more information on using the user-agent to determine the device, see for example https://github.com/hgoebl/mobile-detect.js.

For more information about context in React, see for example https://facebook.github.io/react/docs/context.html.
