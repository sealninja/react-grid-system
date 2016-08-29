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
  };

  getChildContext = () => ({
    phone: this.props.phone,
    tablet: this.props.tablet,
    breakpoints: [768, 992, 1200],
    containerWidths: [750, 970, 1170],
  });

  render = () => (
    <Container>
      <h1>Responsive grid example</h1>

      <Row>
        <Col xs={12} md={8}>xs=12 md=8</Col>
        <Col xs={6} md={4}>xs=6 md=4</Col>
      </Row>

      <h1>Responsive utilties example</h1>

      <Visible xs sm><div>Visible on extra small and small</div></Visible>
      <Hidden xs sm><div>Hidden on extra small and small</div></Hidden>
      <Visible md lg><div>Visible on medium and large</div></Visible>
      <Hidden md lg><div>Hidden on medium and large</div></Hidden>

    </Container>
  );
}

export default ExampleComponent;
