# react-grid-system
A no CSS Bootstrap-like responsive grid system for React.

[![NPM version][version-image]][npm-url] [![Downloads][downloads-image]][npm-url]

## Table of contents

* [Installation](#installation)
* [Getting started](#getting-started)
* [Context types](#context-types)
* [API reference](#api-reference)
* [Example application with SSR](#example-application-with-ssr)

## Installation

```
# Install react peer dependency
npm install react@16

# Install react grid system
npm install react-grid-system --save
```
## Getting started

### Responsive grid

`react-grid-system` provides a responsive grid similar to Bootstrap (see: http://getbootstrap.com/css/#grid),
except here, it's React components only, and **no CSS** is used at all.

Three components are provided for creating responsive grids: `Container`, `Row`, and `Col`.

An example on how to use these:

```html
<Container>
  <Row>
    <Col sm={4}>
      One of three columns
    </Col>
    <Col sm={4}>
      One of three columns
    </Col>
    <Col sm={4}>
      One of three columns
    </Col>
  </Row>
</Container>
```

### Responsive utilities

Next to the grid, two components are provided for showing or hiding content: `Visible` and `Hidden`.
The main difference between these two components and the similar CSS classes provided by Bootstrap is that
these two components do not render the content at all when it should be hidden, instead of just hiding it with CSS.

Some examples on how to use these components:

```html
<p>
  <span>Your current screen class is </span>
  <Visible xs><strong>xs</strong></Visible>
  <Visible sm><strong>sm</strong></Visible>
  <Visible md><strong>md</strong></Visible>
  <Visible lg><strong>lg</strong></Visible>
  <Visible xl><strong>xl</strong></Visible>
  <span>.</span>
</p>
```

```html
<Visible xs sm>
  <p>Paragraph visible on extra small and small.</p>
</Visible>
<Hidden xs sm>
  <p>Paragraph hidden on extra small and small.</p>
</Hidden>
<Visible md lg>
  <p>Paragraph visible on medium and large.</p>
</Visible>
<Hidden md lg>
  <p>Paragraph hidden on medium and large.</p>
</Hidden>
```

Next to that, the `ScreenClassRender` component is provided, for rendering a component differently based on the screen class.
An example on how to use this:

```html
const styleFunction = (screenClass, props) => {
  let fontSize = 10;
  if (screenClass === 'sm') fontSize = 20;
  if (screenClass === 'md') fontSize = 30;
  if (screenClass === 'lg') fontSize = 40;
  if (screenClass === 'xl') fontSize = 50;
  return {
      fontSize: `${fontSize}px`,
      ...props.style,
   };
};

<ScreenClassRender style={styleFunction}><p style={{ color: 'red' }}>Some red text, which font size depends on the screen class.</p></ScreenClassRender>
```

Finally, a `ClearFix` component can be used for resetting a row. This is sometimes needed when not all columns have the same height. For example:

```html
<Row>
  <Col xs={6} sm={3}>
    xs=6 sm=3<br />
    This column has a lot more height, so a clearfix is needed for screenclass xs.
  </Col>
  <Col xs={6} sm={3}>xs=6 sm=3</Col>

  <ClearFix xs />

  <Col xs={6} sm={3}>xs=6 sm=3</Col>
  <Col xs={6} sm={3}>xs=6 sm=3</Col>
</Row>
```

## Context types

The following child context types can be provided to the grid components, to alter their responsive behavior. An example on how to use them can be found in the [Example application with SSR](#example-application-with-ssr) below.

| Context Type      | Default Value      | Description |
| ----------------- | ------------------ | ------------------------------ |
| `breakpoints`     | `[576, 768, 992, 1200]` | The breakpoints (minimum width) of devices in screen class `sm`, `md`, `lg`, and `xl`. The default values are based on the Bootstrap 4 breakpoints. |
| `containerWidths` | `[540, 750, 960, 1140]` | The container widths in pixels of devices in screen class `sm`, `md`, `lg`, and `xl`. The default values are based on the Bootstrap 4 container widths. |
| `gutterWidth` | `30` | The gutter width in pixels. A gutter width of 30 means 15px on each side of a column. The default value is based on the Bootstrap 4 gutter width. |
| `serverSideScreenClass` | `xl` | The screen class used when the view port cannot be determined using `window`. This is useful for server-side rendering (SSR) based on the user agent. See also the example application below. |

## API reference

The API reference and further documentation of all components can be found at the GitHub pages: https://JSxMachina.github.io/react-grid-system/

## Example application with SSR

An example application with server-side rendering using all the features of `react-grid-system` can be found at https://github.com/gerbenmeyer/react-ssr-example.

[version-image]: https://img.shields.io/npm/v/react-grid-system.svg
[downloads-image]: https://img.shields.io/npm/dm/react-grid-system.svg

[npm-url]: https://npmjs.org/package/react-grid-system
