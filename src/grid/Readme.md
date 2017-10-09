A no CSS Bootstrap-like responsive grid system for React.

For more information on these components, view this project on GitHub: [https://github.com/JSxMachina/react-grid-system](https://github.com/JSxMachina/react-grid-system)

Resize your browser or load on different devices to test the grid system.

### Example: Equal-width

```
<Container fluid>
  <Row debug>
    <Col debug>1 of 2</Col>
    <Col debug>2 of 2</Col>
  </Row>
  <Row debug>
    <Col debug>1 of 3</Col>
    <Col debug>2 of 3</Col>
    <Col debug>3 of 3</Col>
  </Row>
</Container>
```

### Example: Stacked to horizontal

```
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
  <Row debug>
    <Col md={8} debug>md=8</Col>
    <Col md={4} debug>md=4</Col>
  </Row>
  <Row debug>
    <Col md={4} debug>md=4</Col>
    <Col md={4} debug>md=4</Col>
    <Col md={4} debug>md=4</Col>
  </Row>
  <Row debug>
    <Col md={6} debug>md=6</Col>
    <Col md={6} debug>md=6</Col>
  </Row>
</Container>
```

### Example: Mix and match

```
<Container fluid>
  <Row debug>
    <Col xs={12} md={8} debug>xs=12 md=8</Col>
    <Col xs={6} md={4} debug>xs=6 md=4</Col>
  </Row>
  <Row debug>
    <Col xs={6} md={4} debug>xs=6 md=4</Col>
    <Col xs={6} md={4} debug>xs=6 md=4</Col>
    <Col xs={6} md={4} debug>xs=6 md=4</Col>
  </Row>
  <Row debug>
    <Col xs={6} debug>xs=6</Col>
    <Col xs={6} debug>xs=6</Col>
  </Row>
</Container>
```

### Example: Column wrapping

```
<Container fluid>
  <Row debug>
    <Col xs={9} debug>xs=9</Col>
    <Col xs={4} debug>xs=4<br/>Since 9 + 4 = 13 &gt; 12, this 4-column-wide Col gets wrapped onto a new line as one contiguous unit.</Col>
    <Col xs={6} debug>xs=6<br/>Subsequent columns continue along the new line.</Col>
  </Row>
</Container>
```

### Example: Vertical alignment

```
<Container fluid>
  <Row align="start" style={{ height: '100px' }} debug>
    <Col debug>1 of 3</Col>
    <Col debug>2 of 3</Col>
    <Col debug>3 of 3</Col>
  </Row>
  <Row align="center" style={{ height: '100px' }} debug>
    <Col debug>1 of 3</Col>
    <Col debug>2 of 3</Col>
    <Col debug>3 of 3</Col>
  </Row>
  <Row align="end" style={{ height: '100px' }} debug>
    <Col debug>1 of 3</Col>
    <Col debug>2 of 3</Col>
    <Col debug>3 of 3</Col>
  </Row>
</Container>
```

### Example: Row growing
```
<Container fluid style={{ height: '300px' }}>
  <Row debug>
    <Col debug>Row 1 of 3</Col>
  </Row>
  <Row grow debug>
    <Col debug>Row 2 of 3</Col>
  </Row>
  <Row debug>
    <Col debug>Row 3 of 3</Col>
  </Row>
</Container>
```

### Example: Responsive column resets

```
<Container fluid>
  <Row debug>
    <Col xs={6} sm={3} debug>
      xs=6 sm=3<br />
      Resize your viewport or check it out on your phone for an example.
    </Col>
    <Col xs={6} sm={3} debug>xs=6 sm=3</Col>

    <ClearFix xs />

    <Col xs={6} sm={3} debug>xs=6 sm=3</Col>
    <Col xs={6} sm={3} debug>xs=6 sm=3</Col>
  </Row>
</Container>
```

### Example: Offsetting columns

```
<Container fluid>
  <Row debug>
    <Col md={4} debug>md=4</Col>
    <Col md={4} offset={{ md: 4 }} debug>md=4 offset-md=4</Col>
  </Row>
  <Row debug>
    <Col md={3} offset={{ md: 3 }} debug>md=3 offset-md=3</Col>
    <Col md={3} offset={{ md: 3 }} debug>md=3 offset-md=3</Col>
  </Row>
  <Row debug>
    <Col md={6} offset={{ md: 3 }} debug>md=6 offset-md=3</Col>
  </Row>
</Container>
```

### Example: Nesting columns

```
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
```

### Example: Column ordering

```
<Row debug>
  <Col md={9} push={{ md: 3 }} debug>md=9 push-md=3</Col>
  <Col md={3} pull={{ md: 9 }} debug>md=3 pull-md=9</Col>
</Row>
```
