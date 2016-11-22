Resize your browser or load on different devices to test the responsive utility components.

Green indicates the element is visible in your current viewport.

```
<Row>
  <Col xs={6} sm={2}>
    <Hidden xs><div style={{ color: 'gray' }}>Extra small</div></Hidden>
    <Visible xs><div style={{ color: 'green' }}>Visible on extra small</div></Visible>
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
    <Hidden xl><div style={{ color: 'gray' }}>Extra large</div></Hidden>
    <Visible xl><div style={{ color: 'green' }}>Visible on extra large</div></Visible>
  </Col>
</Row>
```

```
<Row>
  <Col xs={6}>
    <Hidden xs sm><div style={{ color: 'gray' }}>Extra small and small</div></Hidden>
    <Visible xs sm><div style={{ color: 'green' }}>Visible on extra small and small</div></Visible>
  </Col>
  <Col xs={6}>
    <Hidden md lg><div style={{ color: 'gray' }}>Medium and large</div></Hidden>
    <Visible md lg><div style={{ color: 'green' }}>Visible on medium and large</div></Visible>
  </Col>
</Row>
```

```
<Row>
  <Col xs={6}>
    <Hidden xs md><div style={{ color: 'gray' }}>Extra small and medium</div></Hidden>
    <Visible xs md><div style={{ color: 'green' }}>Visible on extra small and meduim</div></Visible>
  </Col>
  <Col xs={6}>
    <Hidden sm lg><div style={{ color: 'gray' }}>Small and large</div></Hidden>
    <Visible sm lg><div style={{ color: 'green' }}>Visible on small and large</div></Visible>
  </Col>
</Row>
```

```
<Row>
  <Col xs={6}>
    <Hidden xs lg><div style={{ color: 'gray' }}>Extra small and large</div></Hidden>
    <Visible xs lg><div style={{ color: 'green' }}>Visible on extra small and large</div></Visible>
  </Col>
  <Col xs={6}>
    <Hidden sm md><div style={{ color: 'gray' }}>Small and medium</div></Hidden>
    <Visible sm md><div style={{ color: 'green' }}>Visible on small and medium</div></Visible>
  </Col>
</Row>
```

```
<Row>
  <Col xs={6}>
    <Hidden xs xl><div style={{ color: 'gray' }}>Extra small and extra large</div></Hidden>
    <Visible xs xl><div style={{ color: 'green' }}>Visible on extra small and extra large</div></Visible>
  </Col>
  <Col xs={6}>
    <Hidden sm xl><div style={{ color: 'gray' }}>Small and extra large</div></Hidden>
    <Visible sm xl><div style={{ color: 'green' }}>Visible on small and extra large</div></Visible>
  </Col>
</Row>
```
