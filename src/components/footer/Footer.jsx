import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => (
  <footer>
    <Container>
      <Row>
        <Col className="text-left">
          <span className="copyright">
            Copyright &copy; BlockcChain Hub Serbia 2018
          </span>
        </Col>
        <Col className="text-right">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item text-center">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://fb.com/blockchainsrb"
              >
                <i className="fa fa-facebook-f" />
              </a>
            </li>
            <li className="list-inline-item text-center">
              <a rel="noopener noreferrer" target="_blank" href="/">
                <i className="fa fa-linkedin" />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </footer>
);
export default Footer;
