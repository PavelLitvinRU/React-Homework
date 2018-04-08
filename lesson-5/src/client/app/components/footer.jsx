import React, { Component } from 'react';

import { Col } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return <footer className="footer">
        <Col xs={6} xsOffset={6}>
            Current version 1.0
        </Col>
    </footer>;
  }
}