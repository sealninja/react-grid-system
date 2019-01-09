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
