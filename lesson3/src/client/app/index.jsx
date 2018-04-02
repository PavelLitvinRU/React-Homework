import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import Header from './components/header';
import Footer from './components/footer';
import NavInstance from './components/navInstance';
import Main from './components/Main';

class App extends Component {
  render() {
    return <Grid>
                  <Header />
              <Row className="show-grid">
                  <Col xsHidden md={2}>
                      <NavInstance />
                  </Col>
                  <Col xs={6} md={10}>
                      <Main />
                  </Col>
              </Row>
              <Row className="show-grid">
                  <Footer />
              </Row>
          </Grid>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
