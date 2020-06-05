Example usage, rendering a font size based on the screen class:

```
<ScreenClassRender render={screenClass => (
  <p style={{ fontSize: ['lg', 'xl', 'xxl'].includes(screenClass) ? '2rem' : '1rem' }} >
    Screen class: {screenClass}
  </p>
)} />

```

Alternatively, the `useScreenClass` hook can be used for rendering a component differently based on the screen class.
