# React Grid System
A powerful Bootstrap-like responsive grid system for React.

[![NPM version](https://img.shields.io/npm/v/react-grid-system.svg?style=flat-square)](https://npmjs.org/package/react-grid-system)
[![Downloads](https://img.shields.io/npm/dm/react-grid-system.svg?style=flat-square)](https://npmjs.org/package/react-grid-system)
[![Dependency Status](https://img.shields.io/david/sealninja/react-grid-system?style=flat-square)](https://david-dm.org/sealninja/react-grid-system)

## Installation

```
npm install react-grid-system --save
```
## Getting started

### Responsive grid

`react-grid-system` provides a responsive grid similar to Bootstrap (see: https://getbootstrap.com/docs/4.1/layout/grid/). However, `react-grid-system` is purely React, even no CSS or class names are used. Moreover, it adds various powerful features, such as setting breakpoints and gutter widths through React's context.

Three components are provided for creating responsive grids: `Container`, `Row`, and `Col`.

An example on how to use these:

```javascript
import { Container, Row, Col } from 'react-grid-system';

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

For all features of these components, please have a look at the API documentation: https://sealninja.github.io/react-grid-system/

### Responsive utilities

Next to the grid, two components are provided for showing or hiding content: `Visible` and `Hidden`.
The main difference between these two components and the similar CSS classes provided by Bootstrap is that these two components do not render the content at all when it should be hidden, instead of just hiding it with CSS.

Some examples on how to use these components:

```javascript
import { Visible } from 'react-grid-system';

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

```javascript
import { Visible, Hidden } from 'react-grid-system';

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

Next to that, the `ScreenClassRender` component is provided, for rendering a component differently based on the screen class. An example on how to use this:

```javascript
import { ScreenClassRender } from 'react-grid-system';

<ScreenClassRender render={screenClass => (
  <p style={{ fontSize: ['lg', 'xl'].includes(screenClass) ? '2rem' : '1rem' }} >
    Screen class: {screenClass}
  </p>
)} />
```

Alternatively, the `useScreenClass` hook can be used for rendering a component differently based on the screen class. Some examples on how to use this:

```javascript
import React from 'react';
import { useScreenClass } from 'react-grid-system';

// responsive component based the screen width
function Example1() {
  const screenClass = useScreenClass();
  return (
    <p style={{ fontSize: ['lg', 'xl'].includes(screenClass) ? '2rem' : '1rem' }} >
      Screen class: {screenClass}
    </p>
  );
}

// responsive component based the div width
function Example2() {
  const elementRef = useRef(null);
  const screenClass = useScreenClass(elementRef);
  return (
    <div ref={elementRef}>
      <p style={{ fontSize: ['lg', 'xl'].includes(screenClass) ? '2rem' : '1rem' }} >
        Screen class: {screenClass}
      </p>
    </div>
  );
}
```

## Configuration

The following settings can be configured, to alter the responsive behavior of the grid components:

| Setting              | Default Value           | Description                                                                                                                                                                                   |
| -------------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `breakpoints`        | `[576, 768, 992, 1200]` | The breakpoints (minimum width) of devices in screen class `sm`, `md`, `lg`, and `xl`. The default values are based on the Bootstrap 4 breakpoints.                                           |
| `containerWidths`    | `[540, 750, 960, 1140]` | The container widths in pixels of devices in screen class `sm`, `md`, `lg`, and `xl`. The default values are based on the Bootstrap 4 container widths.                                       |
| `gutterWidth`        | `30`                    | The gutter width in pixels. A gutter width of 30 means 15px on each side of a column. The default value is based on the Bootstrap 4 gutter width.                                             |
| `gridColumns`        | `12`                    | The number of colums in the grid .                                                                                                                                                            |
| `defaultScreenClass` | `xl`                    | The screen class used when the view port cannot be determined using `window`. This is useful for server-side rendering (SSR) based on the user agent. See also the example application below. |

These settings can be configured in the following way:

```javascript
import { setConfiguration } from 'react-grid-system';

setConfiguration({ defaultScreenClass: 'sm', gridColumns: 20 });
```

 An example on how to use them can be found in the [Example application with SSR](#example-application-with-ssr) below.

## ScreenClass Context API

Internally, every component that requires the current `screenClass` (which is a human-readable string version of the `window.innerWidth` relating to the user's breakpoints) subscribes to a `ScreenClassProvider`. The provider utilizes the [React Context API](https://reactjs.org/docs/context.html) to send down the current `screenClass` as it updates. By default, each instance of every component subscribes to a separate provider, creating `resize` listeners for each. This can cut down renders during a resize event from ~300 to 4 (one for each breakpoint) making the grid much more performant.

### Do I need to change anything in my code?

This new API is entirely opt-in and current implementations will continue to work. However, for a signficiant performance increase, you will need to add the `ScreenClassProvider` to your application, typically at the highest level in the React node tree (i.e, App.js).


### How do I use the ScreenClassProvider?

```jsx static
import React from 'react';
import { ScreenClassProvider } from 'react-grid-system';

export default function App() {
  return (
    <ScreenClassProvider>
      <Header />
      <Page />
      <Footer />
    </ScreenClassProvider>
  );
}
```

Internally, the `ScreenClassProvider` attaches a `resize` listener and then updates `state.screenClass` exclusively when a new breakpoint is hit. The `state.screenClass` value is then attached to `ScreenClassContext.Provider`. ScreenClass-dependent components are wrapped with `ScreenClassResolver` which checks to see if there is a valid provider above it and provides one if there is not.

The performance benefit comes from _you_ adding a `ScreenClassProvider` to your application which allows `react-grid-system` components to subscribe to **one source of truth** for the ScreenClass.


## API documentation

Extensive documentation of all components can be found at the GitHub pages: https://sealninja.github.io/react-grid-system/

## Example application with SSR

An example application with server-side rendering using features of `react-grid-system` can be found at https://github.com/sealninja/react-ssr-example.

## License

MIT
