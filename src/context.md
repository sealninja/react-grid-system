Internally, every component that requires the current `screenClass` (which is a human-readable string version of the `window.innerWidth` relating to the user's breakpoints) subscribes to a `ScreenClassProvider`. The provider utilizes the [React Context API](https://reactjs.org/docs/context.html) to send down the current `screenClass` as it updates. By default, each instance of every component subscribes to a separate provider, creating `resize` listeners for each. This can cut down renders during a resize event from ~300 to 4 (one for each breakpoint) making the grid much more performant.

---

### Do I need to change anything in my code?

This new API is entirely opt-in and current implementations will continue to work. However, for a signficiant performance increase, you will need to add the `ScreenClassProvider` to your application, typically at the highest level in the React node tree (i.e, App.js).
