A pure React Bootstrap-like responsive grid system without CSS.

Github: [https://github.com/zoover/react-grid-system](https://github.com/zoover/react-grid-system)

### Installation

`
npm install react-grid-system --save
`

### Grid aspects

See how aspects of the grid system work across multiple devices with a handy table.

| | Extra small devices Phones (<768px) | Small devices Tablets (≥768px) | Medium devices Desktops (≥992px) | Large devices Desktops (≥1200px)
| ---- | --- | --- | --- | --- |
| Grid behavior | Horizontal at all times | Collapsed to start, horizontal above breakpoints | ~ | ~ |
| Container width | None (auto) | 750px | 970px | 1170px |
| Property name | `xs` | `sm` | `md` | `lg` |
| # of columns | 12 | ~ | ~ | ~|
| Column width | Auto | ~62px | ~81px | ~97px |
| Gutter width | 	30px (15px on each side of a column) | ~ | ~ | ~ |
| Nestable | Yes | ~ | ~ | ~ |

### Example: Stacked-to-horizontal

```
<Row>
  <Col md={1} style={{ border: '1px solid silver' }}>md=1</Col>
  <Col md={1} style={{ border: '1px solid silver' }}>md=1</Col>
  <Col md={1} style={{ border: '1px solid silver' }}>md=1</Col>
  <Col md={1} style={{ border: '1px solid silver' }}>md=1</Col>
  <Col md={1} style={{ border: '1px solid silver' }}>md=1</Col>
  <Col md={1} style={{ border: '1px solid silver' }}>md=1</Col>
  <Col md={1} style={{ border: '1px solid silver' }}>md=1</Col>
  <Col md={1} style={{ border: '1px solid silver' }}>md=1</Col>
  <Col md={1} style={{ border: '1px solid silver' }}>md=1</Col>
  <Col md={1} style={{ border: '1px solid silver' }}>md=1</Col>
  <Col md={1} style={{ border: '1px solid silver' }}>md=1</Col>
  <Col md={1} style={{ border: '1px solid silver' }}>md=1</Col>
</Row>
```

```
<Row>
  <Col md={8} style={{ border: '1px solid silver' }}>md=8</Col>
  <Col md={4} style={{ border: '1px solid silver' }}>md=4</Col>
</Row>
```

```
<Row>
  <Col md={4} style={{ border: '1px solid silver' }}>md=4</Col>
  <Col md={4} style={{ border: '1px solid silver' }}>md=4</Col>
  <Col md={4} style={{ border: '1px solid silver' }}>md=4</Col>
</Row>
```

```
<Row>
  <Col md={6} style={{ border: '1px solid silver' }}>md=6</Col>
  <Col md={6} style={{ border: '1px solid silver' }}>md=6</Col>
</Row>
```

### Example: Mobile and desktop

```
<Row>
  <Col xs={12} md={8} style={{ border: '1px solid silver' }}>xs=12 md=8</Col>
  <Col xs={6} md={4} style={{ border: '1px solid silver' }}>xs=6 md=4</Col>
</Row>
```

```
<Row>
  <Col xs={6} md={4} style={{ border: '1px solid silver' }}>xs=6 md=4</Col>
  <Col xs={6} md={4} style={{ border: '1px solid silver' }}>xs=6 md=4</Col>
  <Col xs={6} md={4} style={{ border: '1px solid silver' }}>xs=6 md=4</Col>
</Row>
```

```
<Row>
  <Col xs={6} style={{ border: '1px solid silver' }}>xs=6</Col>
  <Col xs={6} style={{ border: '1px solid silver' }}>xs=6</Col>
</Row>
```

### Example: Mobile, tablet, desktop

```
<Row>
  <Col xs={12} sm={6} md={8} style={{ border: '1px solid silver' }}>xs=12 sm=6 md=8</Col>
  <Col xs={6} md={4} style={{ border: '1px solid silver' }}>xs=6 md=4</Col>
</Row>
```

```
<Row>
  <Col xs={6} sm={4} style={{ border: '1px solid silver' }}>xs=6 sm=4</Col>
  <Col xs={6} sm={4} style={{ border: '1px solid silver' }}>xs=6 sm=4</Col>
  <Col xs={6} sm={4} style={{ border: '1px solid silver' }}>xs=6 sm=4</Col>
</Row>
```

### Example: Column wrapping

```
<Row>
  <Col xs={9} style={{ border: '1px solid silver' }}>xs=9</Col>
  <Col xs={4} style={{ border: '1px solid silver' }}>xs=4<br/>Since 9 + 4 = 13 &gt; 12, this 4-column-wide Col gets wrapped onto a new line as one contiguous unit.</Col>
  <Col xs={6} style={{ border: '1px solid silver' }}>xs=6<br/>Subsequent columns continue along the new line.</Col>
</Row>
```

### Example: Nesting columns

```
<Row>
  <Col sm={9} style={{ border: '1px solid silver' }}>
    Level 1: sm=9
    <Row>
      <Col xs={8} sm={6} style={{ border: '1px solid gray' }}>
        Level 2: xs=8 sm=6
      </Col>
      <Col xs={4} sm={6} style={{ border: '1px solid gray' }}>
        Level 2: xs=4 sm=6
      </Col>
    </Row>
  </Col>
</Row>
```
