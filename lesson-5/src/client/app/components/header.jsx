import React, { Component } from 'react';

import { Row } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';

import UserForm from './userForm';

export default class Header extends Component {
  render() {
      return <Row className="show-grid">
      <header className="header">
          <Navbar>
              <Navbar.Header>
                  <Navbar.Brand>
                      <a href="#">React-Bootstrap RUS</a>
                  </Navbar.Brand>
                  <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                  <Nav>
                      <NavItem eventKey={1} href="#">
                          Начало работы
                      </NavItem>
                      <NavDropdown eventKey={2} title="Документация" id="basic-nav-dropdown">
                          <MenuItem eventKey={2.1}>Разметка</MenuItem>
                          <MenuItem divider />
                          <MenuItem eventKey={2.2}>Компоненты</MenuItem>
                          <MenuItem divider />
                          <MenuItem eventKey={2.3}>Утилиты</MenuItem>
                      </NavDropdown>
                  </Nav>
                  <Nav pullRight>
                      <NavItem eventKey={3} href="#">
                          GitHub
                      </NavItem>
                      <NavItem eventKey={4} href="#">
                            <UserForm />
                      </NavItem>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
      </header>
    </Row>;
  }
}