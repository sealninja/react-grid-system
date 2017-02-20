/* eslint max-len: "off" */

import React from 'react';
import { Container, Row, Col, Visible, Hidden, ScreenClassRender } from 'react-grid-system';

class ExampleComponent extends React.Component {
  static propTypes = {
    serverSideScreenClass: React.PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  };

  static childContextTypes = {
    serverSideScreenClass: React.PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    breakpoints: React.PropTypes.arrayOf(React.PropTypes.number),
    containerWidths: React.PropTypes.arrayOf(React.PropTypes.number),
    gutterWidth: React.PropTypes.number,
  };

  getChildContext = () => ({
    serverSideScreenClass: this.props.serverSideScreenClass,
  });

  styleFunction = (screenClass) => {
    if (screenClass === 'xl') return { fontSize: '60px' };
    if (screenClass === 'lg') return { fontSize: '40px' };
    if (screenClass === 'md') return { fontSize: '30px' };
    if (screenClass === 'sm') return { fontSize: '20px' };
    return { fontSize: '10px' };
  };

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
        <Visible xl><strong>xl</strong></Visible>
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

      <ScreenClassRender style={this.styleFunction}><p>Some text which font size depends on the screen class.</p></ScreenClassRender>

    </Container>
  );
}

export default ExampleComponent;
