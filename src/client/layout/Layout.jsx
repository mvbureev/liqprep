import React, { PureComponent } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Header from './Header';
import Footer from './Footer';
import Routes from './Routes';

class App extends PureComponent {
  render() {
    return (
      <>
        <Header />
        <Container fluid>
          <Row>
            <Col>
              <Routes />
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}

export default App;
