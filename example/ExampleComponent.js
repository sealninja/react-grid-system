import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Visible, Hidden, ScreenClassRender } from 'react-grid-system';

class ExampleComponent extends React.Component {
  static propTypes = {
    serverSideScreenClass: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  };

  static defaultProps = {
    serverSideScreenClass: 'xl',
  }

  static childContextTypes = {
    serverSideScreenClass: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    breakpoints: PropTypes.arrayOf(PropTypes.number),
  };

  getChildContext = () => ({
    serverSideScreenClass: this.props.serverSideScreenClass,
    breakpoints: [576, 768, 800, 1200],
  });

  styleFunction = (screenClass, props) => {
    let fontSize = 10;
    if (screenClass === 'sm') fontSize = 20;
    if (screenClass === 'md') fontSize = 30;
    if (screenClass === 'lg') fontSize = 40;
    if (screenClass === 'xl') fontSize = 50;
    return {
      fontSize: `${fontSize}px`,
      ...props.style,
    };
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

      <ScreenClassRender style={this.styleFunction}><p style={{ color: 'red' }}>Some red text, which font size depends on the screen class.</p></ScreenClassRender>

    </Container>
  );
}

export default ExampleComponent;
