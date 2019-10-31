import React, { PureComponent } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class MainMenu extends PureComponent {
  render() {
    return (
      <Nav className="mr-auto" navbar>
        <NavItem>
          {/* <NavLink to="/about" activeClassName="active" className="nav-link">
            About
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/todos" activeClassName="active" className="nav-link">
            Todos
          </NavLink> */}
        </NavItem>
      </Nav>
    );
  }
}

export default MainMenu;
