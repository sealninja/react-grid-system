# react-grid-system
A no CSS Bootstrap-like responsive grid system for React.

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]

## Installation

```
npm install react-grid-system --save
```

## Responsive grid

`react-grid-system` provides a responsive grid similar to Bootstrap (see: http://getbootstrap.com/css/#grid),
except here React components are used, and **no CSS** is needed at all.

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

## Responsive utilities

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

Next to that, the `ScreenClassRender` utility is provided, for rendering a component differently based on the screen class.
An example on how to use this:

```html
const styleFunction = (screenClass) => {
  if (screenClass === 'xl') return { fontSize: '60px' };
  if (screenClass === 'lg') return { fontSize: '40px' };
  if (screenClass === 'md') return { fontSize: '30px' };
  if (screenClass === 'sm') return { fontSize: '20px' };
  return { fontSize: '10px' };
};

<ScreenClassRender style={styleFunction}><p>Some text</p></ScreenClassRender>
```

## Context types

The following child context types can be provided to the grid components, to alter their responsive behavior:

| Context Type      | Default Value      | Description |
| ----------------- | ------------------ | ------------------------------ |
| `phone`           | `false`            | When set to `true`, a default viewport width of 375 pixels will be used, in case the viewport width cannot be determined by using the `window` object. This is useful for server-side rendering. |
| `tablet`          | `false`            | When set to `true`, a default viewport width of 768 pixels will be used, in case the viewport width cannot be determined by using the `window` object. This is useful for server-side rendering. |
| `breakpoints`     | `[576, 768, 992, 1200]` | The breakpoints (minimum width) of devices in screen class `sm`, `md`, `lg`, and `xl`. The default values are based on the Bootstrap 4 breakpoints. |
| `containerWidths` | `[540, 750, 960, 1140]` | The container widths in pixels of devices in screen class `sm`, `md`, `lg`, and `xl`. The default values are based on the Bootstrap 4 container widths. |
| `gutterWidth` | `30` | The gutter width in pixels. A gutter width of 30 means 15px on each side of a column. The default value is based on the Bootstrap 4 gutter width. |

## Example Application and Documentation

An simple example application using all the features of `react-grid-system` can be found at https://github.com/zoover/react-grid-system/tree/master/example.

More examples and documentation of all components can be found at the GitHub pages: https://zoover.github.io/react-grid-system/

[downloads-image]: http://img.shields.io/npm/dm/react-grid-system.svg

[npm-url]: https://npmjs.org/package/react-grid-system
[npm-image]: http://img.shields.io/npm/v/react-grid-system.svg
