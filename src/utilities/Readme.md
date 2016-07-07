Resize your browser or load on different devices to test the responsive utility classes.

Green indicates the element is visible in your current viewport.

```
<Row>
  <Col xs={6} sm={3}>
    <Hidden xs style={{ color: 'gray' }}>Extra small</Hidden>
    <Visible xs style={{ color: 'green' }}>Visible on extra small</Visible>
  </Col>
  <Col xs={6} sm={3}>
    <Hidden sm style={{ color: 'gray' }}>Small</Hidden>
    <Visible sm style={{ color: 'green' }}>Visible on small</Visible>
  </Col>
  <Col xs={6} sm={3}>
    <Hidden md style={{ color: 'gray' }}>Medium</Hidden>
    <Visible md style={{ color: 'green' }}>Visible on medium</Visible>
  </Col>
  <Col xs={6} sm={3}>
    <Hidden lg style={{ color: 'gray' }}>Large</Hidden>
    <Visible lg style={{ color: 'green' }}>Visible on large</Visible>
  </Col>
</Row>
```

```
<Row>
  <Col xs={6}>
    <Hidden xs sm style={{ color: 'gray' }}>Extra small and small</Hidden>
    <Visible xs sm style={{ color: 'green' }}>Visible on extra small and small</Visible>
  </Col>
  <Col xs={6}>
    <Hidden md lg style={{ color: 'gray' }}>Medium and large</Hidden>
    <Visible md lg style={{ color: 'green' }}>Visible on medium and large</Visible>
  </Col>
</Row>
```

```
<Row>
  <Col xs={6}>
    <Hidden xs md style={{ color: 'gray' }}>Extra small and medium</Hidden>
    <Visible xs md style={{ color: 'green' }}>Visible on extra small and meduim</Visible>
  </Col>
  <Col xs={6}>
    <Hidden sm lg style={{ color: 'gray' }}>Small and large</Hidden>
    <Visible sm lg style={{ color: 'green' }}>Visible on small and large</Visible>
  </Col>
</Row>
```

```
<Row>
  <Col xs={6}>
    <Hidden xs lg style={{ color: 'gray' }}>Extra small and large</Hidden>
    <Visible xs lg style={{ color: 'green' }}>Visible on extra small and large</Visible>
  </Col>
  <Col xs={6}>
    <Hidden sm md style={{ color: 'gray' }}>Small and medium</Hidden>
    <Visible sm md style={{ color: 'green' }}>Visible on small and medium</Visible>
  </Col>
</Row>
```
