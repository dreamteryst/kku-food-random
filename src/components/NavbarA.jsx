import React from 'react';
import { Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class NavbarA extends React.Component {
	  constructor(props) {
	    super(props);

	    this.toggleNavbar = this.toggleNavbar.bind(this);
	    this.state = {
	      collapsed: true
	    };
	  }

	  toggleNavbar() {
	    this.setState({
	      collapsed: !this.state.collapsed
	    });
	  }
	render() {
		return (
	      <div>
	        <Navbar color="inverse" dark full>
	          <NavbarToggler className="float-sm-right hidden-lg-up collapsed" onClick={this.toggleNavbar} />
	          <Collapse className="navbar-toggleable-md" isOpen={!this.state.collapsed}>
	            <NavbarBrand href="/">Food Random</NavbarBrand>
	            <Nav navbar>
	              <NavItem>
	                <NavLink href="/components/">Components</NavLink>
	              </NavItem>
	              <NavItem>
	                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
	              </NavItem>
	            </Nav>
	          </Collapse>
	        </Navbar>
	      </div>
		);
	}
}

export default NavbarA;