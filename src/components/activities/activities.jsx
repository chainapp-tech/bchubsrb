import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";

import Advocacy from "../../img/advocacy.jpg";
import Capacity from "../../img/capacity-building.jpg";
import Projects from "../../img/projects.jpg";

export default class Activities extends React.Component {
  render() {
    return (
      <div>
        <section className="bg-dark" id="activities">
          <Container>
            <Row>
              <Col className="text-center">
                <h2 className="section-heading text-uppercase text-light">
                  Activities
                </h2>
                <h3 className="section-subheading text-muted">
                  Decentralized digital ledger
                </h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card>
                  <CardBody>
                    <CardTitle className="text-center">Advocacy</CardTitle>
                  </CardBody>
                  <CardImg top width="100%" src={Advocacy} alt="Advocacy" />
                  <CardBody>
                    <CardText>
                      <span className="text-danger">Duplicated content!</span>{" "}
                      EUBCHUB Serbia facilitates advocacy for creation and
                      development of Blockchain and emerging technologies. We
                      aim to support the Sustainable Development Goals across
                      multiple sectors worldwide.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col>
                <Card>
                  <CardBody>
                    <CardTitle className="text-center">
                      Capacity Building
                    </CardTitle>
                  </CardBody>
                  <CardImg
                    top
                    width="100%"
                    src={Capacity}
                    alt="Capacity Building"
                  />
                  <CardBody>
                    <CardText>
                      <span className="text-danger">Duplicated content!</span>{" "}
                      EU BC HUB generates and distributes knowledge about
                      Blockchain and emerging technologies. We create new
                      concepts throughout open research & innovation. We design
                      curriculums...
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col>
                <Card>
                  <CardBody>
                    <CardTitle className="text-center">Projects</CardTitle>
                  </CardBody>
                  <CardImg top width="100%" src={Projects} alt="Projects" />
                  <CardBody>
                    <CardText>
                      <span className="text-danger">Duplicated content!</span>{" "}
                      EU BC HUB initiates, co-ordinates and runs Blockchain and
                      emerging technologies projects of common interest of the
                      co-operative stakeholders, members and partners. Lorem
                      Ipsum dolores...
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}
