```js
import { Container, Row, Col, setConfiguration } from '.';

setConfiguration({
  componentDecorator: (Component, componentName) => {
    const DecoratedRow = ({ style, ...props }) => <Component style={{ ...style, background: 'aqua' }} {...props} />;
    const DecoratedCol = ({ style, ...props }) => <Component style={{ ...style, color: 'purple' }} {...props} />;
    if (componentName === 'Row') return DecoratedRow;
    if (componentName === 'Col') return DecoratedCol;
    return Component;
  }
});

<Container fluid>
  <Row debug>
    <Col debug>1 of 2</Col>
    <Col debug>2 of 2</Col>
  </Row>
  <br />
  <Row debug>
    <Col debug>1 of 3</Col>
    <Col debug>2 of 3</Col>
    <Col debug>3 of 3</Col>
  </Row>
</Container>
```
