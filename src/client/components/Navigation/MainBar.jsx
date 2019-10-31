import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import MainMenu from './MainMenu';

class MainBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar expand="md" light>
        <NavLink to="/">
          <span id="site-name">Todo client</span>
        </NavLink>

        <NavbarToggler onClick={this.toggle} />

        <Collapse isOpen={this.state.isOpen} navbar id="site-menu">
          <MainMenu />
        </Collapse>
      </Navbar>
    );
  }
}

export default MainBar;
