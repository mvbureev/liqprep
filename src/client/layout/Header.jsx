import React, { PureComponent } from 'react';
import {
  // Collapse,
  Navbar,
  // NavbarToggler,
  NavbarBrand,
  // Nav,
  // NavItem,
  // NavLink,
} from 'reactstrap';

class Header extends PureComponent {
  // constructor(props) {
  //   super(props);
  //   this.state = { isOpen: false };
  // }

  render() {
    // const { isOpen } = this.state;
    return (
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">LiqPrep</NavbarBrand>
        {/* <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://gitlab.com/iburey/liqprep" target="_blank">GitLab</NavLink>
            </NavItem>
          </Nav>
        </Collapse> */}
      </Navbar>

    );
  }
}

export default Header;
