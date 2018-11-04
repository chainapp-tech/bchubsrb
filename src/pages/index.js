import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

import Hero from "../components/hero/Hero";
import Principles from "../components/principles/Principles";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Team from "../components/team/Team";
import Partners from "../components/partners/Partners";
import Activities from "../components/activities/activities";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <Hero />

        <Principles />
        <Activities />
        <Team />
        <About />
        <section className="section">
          <Container>
            <Row>
              <Col className="text-center">
                <h2 className="section-heading text-uppercase">Blog</h2>
                <h3 className="section-subheading text-muted">
                  Latest Stories
                </h3>
              </Col>
            </Row>
            <Row>
              {posts.map(({ node: post }) => (
                <div className="col-md-4">
                  <Card>
                    <CardImg
                      top
                      width="100%"
                      src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>{post.frontmatter.title}</CardTitle>
                      <CardSubtitle>{post.frontmatter.date}</CardSubtitle>
                      <CardText>{post.excerpt}</CardText>
                      <Link className="button is-small" to={post.fields.slug}>
                        Keep Reading →
                      </Link>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </Row>
          </Container>
        </section>
        <Partners />
        <Contact />
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "DD.MM.YYYY")
          }
        }
      }
    }
  }
`;
