import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "gatsby";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

import logo from "../../img/bchub-logo.svg";

export default class MainMenu extends React.Component {
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
      <div>
        <Container>
          <Row>
            <Col>
              <Navbar light expand="lg">
                <NavbarBrand href="/">
                  <img src={logo} alt="" />
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} className="mr-2" />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link className="nav-link" to="#principles">
                        Principles
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link className="nav-link" to="#activities">
                        Activities
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link className="nav-link" to="#team">
                        Team
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link className="nav-link" to="#about">
                        About Blockchain
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link className="nav-link" to="#blog">
                        Blog
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link className="nav-link" to="#contact">
                        Contact
                      </Link>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
