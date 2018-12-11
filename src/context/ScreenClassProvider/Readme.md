## ScreenClassProvider

Internally, every component that requires the current `screenClass` (which is a human-readable string version of the `window.innerWidth` relating to the user's breakpoints) subscribes to a `ScreenClassProvider`. The provider utilizes the [React Context API](https://reactjs.org/docs/context.html) to send down the current `screenClass` as it updates. By default, each instance of every component subscribes to a separate provider, creating `resize` listeners for each. This can cut down renders during a resize event from ~300 to 4 (one for each breakpoint) making the grid much more performant.

### Do I need to change anything in my code?

This new API is entirely opt-in. Your current implementations will not break. However, to see the performance benefits, you will need to add the `ScreenClassProvider` to your application, typically at the highest level in the React node tree that you can.

### How do I use it?

You can import the `ScreenClassProvider` component and wrap your top-level React component with it. This attaches a `resize` listener and allows all grid components below it to subscribe to **one listener**. Take a look at the example code below:

```jsx
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

Internally, the `ScreenClassProvider` attaches a `resize` listener and then updates `state.screenClass` ONLY when a new breakpoint is hit. The `state.screenClass` value is then attached to `ScreenClassContext.Provider`–the `Col`, `Hidden`, `Visible`, and `ScreenClassRender` components are all wrapped in something called a `ScreenClassResolver`. The resolver checks to see if there is a valid provider above it. If not, we wrap a `ScreenClassProvider` that attaches it's own `resize` listeners.
