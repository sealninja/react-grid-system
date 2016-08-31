/* eslint max-len: "off" */

import React from 'react';
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';

class ExampleComponent extends React.Component {
  static propTypes = {
    phone: React.PropTypes.bool,
    tablet: React.PropTypes.bool,
  };

  static childContextTypes = {
    phone: React.PropTypes.bool,
    tablet: React.PropTypes.bool,
    breakpoints: React.PropTypes.arrayOf(React.PropTypes.number),
    containerWidths: React.PropTypes.arrayOf(React.PropTypes.number),
    gutterWidth: React.PropTypes.number,
  };

  getChildContext = () => ({
    phone: this.props.phone,
    tablet: this.props.tablet,
    breakpoints: [768, 992, 1200],
    containerWidths: [750, 970, 1170],
    gutterWidth: 30,
  });

  render = () => (
    <Container>
      <h1>Responsive grid example</h1>

      <Row>
        <Col sm={4}>
          One of three columns
        </Col>
        <Col sm={4}>
          One of three columns
        </Col>
        <Col sm={4}>
          One of three columns
        </Col>
      </Row>

      <h1>Responsive utilties example</h1>

      <p>
        <span>Your current screen class is </span>
        <Visible xs><strong>xs</strong></Visible>
        <Visible sm><strong>sm</strong></Visible>
        <Visible md><strong>md</strong></Visible>
        <Visible lg><strong>lg</strong></Visible>
        <span>.</span>
      </p>

      <Visible xs sm>
        <p>Paragraph visible on extra small and small.</p>
      </Visible>
      <Hidden xs sm>
        <p>Paragraph hidden on extra small and small.</p>
      </Hidden>
      <Visible md lg>
        <p>Paragraph visible on medium and large.</p>
      </Visible>
      <Hidden md lg>
        <p>Paragraph hidden on medium and large.</p>
      </Hidden>

    </Container>
  );
}

export default ExampleComponent;
