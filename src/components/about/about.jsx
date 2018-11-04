import React from "react";
import { Container, Row, Col } from "reactstrap";

import About from "../../img/about-blockchain.jpg";

export default class About extends React.Component {
  render() {
    return (
      <div>
        <section className="bg-dark" id="about">
          <Container>
            <Row>
              <Col className="text-center">
                <h2 className="section-heading text-uppercase text-light">
                  About blockchain
                </h2>
                <h3 className="section-subheading text-muted">
                  Decentralized digital ledger
                </h3>
              </Col>
            </Row>
            <Row>
              <Col className="col-md-5 text-light text-right">
                <h4 className="service-heading">
                  Decentralized and safe records
                </h4>
                <p>
                  <span className="text-danger">
                    Duplicated content. Same as on EU BC Hub. Should be replaced
                    to avoid Google penalties.
                  </span>{" "}
                  Blockchain technology is a digital ledger that records value
                  creation in a Transparent &amp; Non- manipulated; Democratic
                  &amp; Decentralised and Safe &amp; Trastfull way.
                </p>
              </Col>
              <Col className="col-md-2">
                <img className="rounded-circle img-fluid" src={About1} alt="" />
              </Col>
              <Col className="col-md-5 text-light text-left">
                <h4 className="service-heading">
                  Definite and trustfull transactions
                </h4>
                <p>
                  <span className="text-danger">
                    Duplicated content. Same as on EU BC Hub. Should be replaced
                    to avoid Google penalties.
                  </span>{" "}
                  With keeping a definite record of transactions which provides
                  trust &amp; traceability the areas of value creation are in
                  Financial sector – Cryptocurencies; Supply chain; Energy &amp;
                  Different utilies sectors; Governance &amp; Public services
                  and in designing a new business models.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}
