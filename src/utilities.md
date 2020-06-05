Resize your browser or load on different devices to test the responsive utility components.

```js
import { Row, Col, Visible, Hidden } from '.';

<p>
  <span>Your current screen class is </span>
  <Visible xs><strong>xs</strong></Visible>
  <Visible sm><strong>sm</strong></Visible>
  <Visible md><strong>md</strong></Visible>
  <Visible lg><strong>lg</strong></Visible>
  <Visible xl><strong>xl</strong></Visible>
  <Visible xxl><strong>xxl</strong></Visible>
  <span>.</span>
</p>
```

In below examples, green indicates the element is visible in your current viewport.

```js
import { Row, Col, Visible, Hidden } from '.';

<Row>
  <Col xs={6} sm={2}>
    <Hidden xs><div style={{ color: 'gray' }}>x-small</div></Hidden>
    <Visible xs><div style={{ color: 'green' }}>Visible on x-small</div></Visible>
  </Col>
  <Col xs={6} sm={2}>
    <Hidden sm><div style={{ color: 'gray' }}>Small</div></Hidden>
    <Visible sm><div style={{ color: 'green' }}>Visible on small</div></Visible>
  </Col>
  <Col xs={6} sm={2}>
    <Hidden md><div style={{ color: 'gray' }}>Medium</div></Hidden>
    <Visible md><div style={{ color: 'green' }}>Visible on medium</div></Visible>
  </Col>
  <Col xs={6} sm={2}>
    <Hidden lg><div style={{ color: 'gray' }}>Large</div></Hidden>
    <Visible lg><div style={{ color: 'green' }}>Visible on large</div></Visible>
  </Col>
  <Col xs={6} sm={2}>
    <Hidden xl><div style={{ color: 'gray' }}>x-large</div></Hidden>
    <Visible xl><div style={{ color: 'green' }}>Visible on x-large</div></Visible>
  </Col>
  <Col xs={6} sm={2}>
    <Hidden xxl><div style={{ color: 'gray' }}>xx-large</div></Hidden>
    <Visible xxl><div style={{ color: 'green' }}>Visible on xx-large</div></Visible>
  </Col>
</Row>
```

```js
import { Row, Col, Visible, Hidden } from '.';

<Row>
  <Col xs={4}>
    <Hidden xs sm><div style={{ color: 'gray' }}>Extra small and small</div></Hidden>
    <Visible xs sm><div style={{ color: 'green' }}>Visible on extra small and small</div></Visible>
  </Col>
  <Col xs={4}>
    <Hidden md lg><div style={{ color: 'gray' }}>Medium and large</div></Hidden>
    <Visible md lg><div style={{ color: 'green' }}>Visible on medium and large</div></Visible>
  </Col>
  <Col xs={4}>
    <Hidden xl xxl><div style={{ color: 'gray' }}>x-large and xx-large</div></Hidden>
    <Visible xl xxl><div style={{ color: 'green' }}>Visible on x-large and xx-large</div></Visible>
  </Col>
</Row>
```
