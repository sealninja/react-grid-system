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

      <p>
        <span>Your current screen is </span>
        <Visible xs><strong>extra small</strong></Visible>
        <Visible sm><strong>small</strong></Visible>
        <Visible md><strong>medium</strong></Visible>
        <Visible lg><strong>large</strong></Visible>
        <span>.</span>
      </p>

      <Visible xs sm><p>Visible on extra small and small</p></Visible>
      <Hidden xs sm><p>Hidden on extra small and small</p></Hidden>
      <Visible md lg><p>Visible on medium and large</p></Visible>
      <Hidden md lg><p>Hidden on medium and large</p></Hidden>

    </Container>
  );
}

export default ExampleComponent;
