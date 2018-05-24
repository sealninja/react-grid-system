Example usage, rendering a font size based on the screen class:

```
<ScreenClassRender render={screenClass => (
  <p style={{ fontSize: ['lg', 'xl'].includes(screenClass) ? '2rem' : '1rem' }} >
    Screen class: {screenClass}
  </p>
)} />

```
