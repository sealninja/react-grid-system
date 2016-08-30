# react-grid-system
A no CSS Bootstrap-like responsive grid system for React.

[![npm version](https://badge.fury.io/js/react-grid-system.svg)](https://badge.fury.io/js/react-grid-system)

## Installation

```
npm install react-grid-system --save
```

## Responsive grid components

Three components are provided for creating responsive grids: `Container`, `Row`, and `Col`.

An example on how to use these:

```
<Container>
  <Row>
    <Col xs={12} md={8}>xs=12 md=8</Col>
    <Col xs={6} md={4}>xs=6 md=4</Col>
  </Row>
</Container>
```

## Responsive utilities

Three components are provided for creating responsive grids: `Visible` and `Hidden`.

Some examples on how to use these:

```
<p>
  <span>Your current screen is </span>
  <Visible xs><strong>extra small</strong></Visible>
  <Visible sm><strong>small</strong></Visible>
  <Visible md><strong>medium</strong></Visible>
  <Visible lg><strong>large</strong></Visible>
  <span>.</span>
</p>

<Visible xs sm><p>Visible on extra small and small</p></Visible>
<Hidden xs sm><p>Hidden on extra small and small</p></Hidden>
<Visible md lg><p>Visible on medium and large</p></Visible>
<Hidden md lg><p>Hidden on medium and large</p></Hidden>
```

## Context types

The following child context types can be provided to the grid components, to alter their responsive behavior:

| Context Type      | Default Value      | Description |
| ----------------- | ------------------ | ------------------------------ |
| `phone`           | `false`            | When set to `true`, a default viewport width of 375 pixels will be used, in case the viewport width cannot be determined by using the `window` object. This is useful for server-side rendering. |
| `tablet`          | `false`            | When set to `true`, a default viewport width of 768 pixels will be used, in case the viewport width cannot be determined by using the `window` object. This is useful for server-side rendering. |
| `breakpoints`     | `[768, 992, 1200]` | The breakpoints (minimum width) of devices in class `sm`, `md`, and `lg`. The default values are based on the Bootstrap 3 breakpoints. |
| `containerWidths` | `[750, 970, 1170]` | The container widths in pixels of devices in class `sm`, `md`, and `lg`. The default values are based on the Bootstrap 3 container widths. |

## Example Application and Documentation

An simple example application using all the features of `react-grid-system` can be found at https://github.com/zoover/react-grid-system/tree/master/example.

More examples and documentation of all components can be found at the GitHub pages: https://zoover.github.io/react-grid-system/
