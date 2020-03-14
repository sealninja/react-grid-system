Resize your browser or load on different devices to test the grid system.

### Example: Equal-width

```js
import { Container, Row, Col } from '.';

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

### Example: Stacked to horizontal

```js
import { Container, Row, Col } from '.';

<Container fluid>
  <Row debug>
    <Col md={1} debug>md=1</Col>
    <Col md={1} debug>md=1</Col>
    <Col md={1} debug>md=1</Col>
    <Col md={1} debug>md=1</Col>
    <Col md={1} debug>md=1</Col>
    <Col md={1} debug>md=1</Col>
    <Col md={1} debug>md=1</Col>
    <Col md={1} debug>md=1</Col>
    <Col md={1} debug>md=1</Col>
    <Col md={1} debug>md=1</Col>
    <Col md={1} debug>md=1</Col>
    <Col md={1} debug>md=1</Col>
  </Row>
  <br />
  <Row debug>
    <Col md={8} debug>md=8</Col>
    <Col md={4} debug>md=4</Col>
  </Row>
  <br />
  <Row debug>
    <Col md={4} debug>md=4</Col>
    <Col md={4} debug>md=4</Col>
    <Col md={4} debug>md=4</Col>
  </Row>
  <br />
  <Row debug>
    <Col md={6} debug>md=6</Col>
    <Col md={6} debug>md=6</Col>
  </Row>
</Container>
```

### Example: Mix and match

```js
import { Container, Row, Col } from '.';

<Container fluid>
  <Row debug>
    <Col xs={12} md={8} debug>xs=12 md=8</Col>
    <Col xs={6} md={4} debug>xs=6 md=4</Col>
  </Row>
  <br />
  <Row debug>
    <Col xs={6} md={4} debug>xs=6 md=4</Col>
    <Col xs={6} md={4} debug>xs=6 md=4</Col>
    <Col xs={6} md={4} debug>xs=6 md=4</Col>
  </Row>
  <br />
  <Row debug>
    <Col xs={6} debug>xs=6</Col>
    <Col xs={6} debug>xs=6</Col>
  </Row>
</Container>
```

### Example: Column wrapping

```js
import { Container, Row, Col } from '.';

<Container fluid>
  <Row debug>
    <Col xs={9} debug>xs=9</Col>
    <Col xs={4} debug>xs=4<br/>Since 9 + 4 = 13 &gt; 12, this 4-column-wide Col gets wrapped onto a new line as one contiguous unit.</Col>
    <Col xs={6} debug>xs=6<br/>Subsequent columns continue along the new line.</Col>
  </Row>
</Container>
```

### Example: Vertical alignment

```js
import { Container, Row, Col } from '.';

<Container fluid>
  <Row align="start" style={{ height: '75px' }} debug>
    <Col debug>1 of 3</Col>
    <Col debug>2 of 3</Col>
    <Col debug>3 of 3</Col>
  </Row>
  <br />
  <Row align="center" style={{ height: '75px' }} debug>
    <Col debug>1 of 3</Col>
    <Col debug>2 of 3</Col>
    <Col debug>3 of 3</Col>
  </Row>
  <br />
  <Row align="end" style={{ height: '75px' }} debug>
    <Col debug>1 of 3</Col>
    <Col debug>2 of 3</Col>
    <Col debug>3 of 3</Col>
  </Row>
  <br />
  <Row align="stretch" style={{ height: '75px' }} debug>
    <Col debug>1 of 3</Col>
    <Col debug>2 of 3</Col>
    <Col debug>3 of 3</Col>
  </Row>
</Container>
```

### Example: Horizontal alignment

```js
import { Container, Row, Col } from '.';

<Container fluid>
  <Row justify="start" debug>
    <Col xs={3} debug>1 of 3</Col>
    <Col xs={3} debug>2 of 3</Col>
    <Col xs={3} debug>3 of 3</Col>
  </Row>
  <br />
  <Row justify="center" debug>
    <Col xs={3} debug>1 of 3</Col>
    <Col xs={3} debug>2 of 3</Col>
    <Col xs={3} debug>3 of 3</Col>
  </Row>
  <br />
  <Row justify="end" debug>
    <Col xs={3} debug>1 of 3</Col>
    <Col xs={3} debug>2 of 3</Col>
    <Col xs={3} debug>3 of 3</Col>
  </Row>
  <br />
  <Row justify="between" debug>
    <Col xs={3} debug>1 of 3</Col>
    <Col xs={3} debug>2 of 3</Col>
    <Col xs={3} debug>3 of 3</Col>
  </Row>
  <br />
  <Row justify="around" debug>
    <Col xs={3} debug>1 of 3</Col>
    <Col xs={3} debug>2 of 3</Col>
    <Col xs={3} debug>3 of 3</Col>
  </Row>
  <br />
  <Row justify="initial" debug>
    <Col xs={3} debug>1 of 3</Col>
    <Col xs={3} debug>2 of 3</Col>
    <Col xs={3} debug>3 of 3</Col>
  </Row>
  <br />
  <Row justify="inherit" debug>
    <Col xs={3} debug>1 of 3</Col>
    <Col xs={3} debug>2 of 3</Col>
    <Col xs={3} debug>3 of 3</Col>
  </Row>
</Container>
```

### Example: Offsetting columns

```js
import { Container, Row, Col } from '.';

<Container fluid>
  <Row debug>
    <Col md={4} debug>md=4</Col>
    <Col md={4} offset={{ md: 4 }} debug>md=4 offset-md=4</Col>
  </Row>
  <br />
  <Row debug>
    <Col md={3} offset={{ md: 3 }} debug>md=3 offset-md=3</Col>
    <Col md={3} offset={{ md: 3 }} debug>md=3 offset-md=3</Col>
  </Row>
  <br />
  <Row debug>
    <Col md={6} offset={{ md: 3 }} debug>md=6 offset-md=3</Col>
  </Row>
</Container>
```

### Example: Nesting columns

```js
import { Container, Row, Col } from '.';

<Container fluid>
  <Row debug>
    <Col sm={9} debug>
      Level 1: sm=9
      <Row>
        <Col xs={8} sm={6} debug>
          Level 2: xs=8 sm=6
        </Col>
        <Col xs={4} sm={6} debug>
          Level 2: xs=4 sm=6
        </Col>
      </Row>
    </Col>
  </Row>
</Container>
```

### Example: Column ordering

```js
import { Container, Row, Col } from '.';

<Container fluid>
  <Row debug>
    <Col md={9} push={{ md: 3 }} debug>md=9 push-md=3</Col>
    <Col md={3} pull={{ md: 9 }} debug>md=3 pull-md=9</Col>
  </Row>
</Container>
```

### Example: Custom gutter width

```js
import { Container, Row, Col } from '.';

<Container fluid>
  <Row nogutter debug>
    <Col md={8} debug>md=8</Col>
    <Col md={4} debug>md=4</Col>
  </Row>
  <br />
  <Row gutterWidth={16} debug>
    <Col md={8} debug>md=8</Col>
    <Col md={4} debug>md=4</Col>
  </Row>
</Container>
```

### Example: Column width adapted to content

```js
import { Container, Row, Col } from '.';

<Container fluid>
  <Row debug>
    <Col debug>Logo (Flexible column)</Col>
    <Col xs="content" debug> Menu with x-items</Col>
  </Row>
</Container>
```
