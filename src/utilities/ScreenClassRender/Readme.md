Example usage, rendering a different font size for each screen class:

```
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

<ScreenClassRender style={styleFunction}><p style={{ color: 'red' }}>Some text</p></ScreenClassRender>
```
