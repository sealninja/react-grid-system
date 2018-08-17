Example usage, rendering a font size based on the screen class:

```javascript
import { withScreenClass } from 'react-grid-system';

function ResponsiveFontSizeExample(props) {
    const {
      screenClass, // added by withScreenClass HOC
    } = props;

    return (
        <p style={{ fontSize: ['lg', 'xl'].includes(screenClass) ? '2rem' : '1rem' }} >
            Screen class: {screenClass}
        </p>
    );
}

export default withScreenClass(ResponsiveFontSizeExample);

```
