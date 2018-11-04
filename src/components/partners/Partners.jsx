import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "gatsby";

import YoungAmbassadors from "../../img/logos/mladi-ambasadori.jpg";
import BlockchainSystems from "../../img/logos/blockchain-systems.jpg";
import EuBchub from "../../img/logos/european-bchub.jpg";

const Partners = () => (
  <div>
    <section className="bg-light" id="partners">
      <Container>
        <Row>
          <Col className="text-center">
            <h2 className="section-heading text-uppercase text-dark mb-4">
              Partners
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/">
              <img
                className="img-fluid d-block mx-auto"
                src={YoungAmbassadors}
                alt="Mladi ambasadori"
              />
            </Link>
          </Col>
          <Col>
            <Link to="/">
              <img
                className="img-fluid d-block mx-auto"
                src={EuBchub}
                alt="EU BCHUB"
              />
            </Link>
          </Col>
          <Col>
            <Link to="/">
              <img
                className="img-fluid d-block mx-auto"
                src={BlockchainSystems}
                alt="Blockchain Systems"
              />
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  </div>
);

export default Partners;
