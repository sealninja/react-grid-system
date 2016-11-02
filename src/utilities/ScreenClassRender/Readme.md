Example usage, rendering a different font size for each screen class:

```

const styleFunction = (screenClass) => {
  if (screenClass == 'lg') {
    return { fontSize: '40px' };
  }
  if (screenClass == 'md') {
    return { fontSize: '30px' };
  }
  if (screenClass == 'sm') {
    return { fontSize: '20px' };
  }
  return { fontSize: '10px' };
};

<ScreenClassRender style={styleFunction}><p>Some text</p></ScreenClassRender>

```
