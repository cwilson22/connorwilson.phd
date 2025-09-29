import React from "react";
import Layout from "../../components/Layout";
import { SectionTitle, Paragraph } from "../../styles";
import { Col, Image, Row, Card } from "react-bootstrap";
import Media from "../../components/Media";
import { LinkContainer } from "react-router-bootstrap";
import AnimatedBackground from "../../components/AnimatedBackground/AnimatedBackground";
import { StyledAboutSection } from "../../components/Header/styles";
// import { ProfileLink } from './styles';

const Cards = ({ items }) => {
  return (
    <Row className="g-1">
      {items.map((item, index) => (
        <Col key={index} lg={4} md={6} sm={12} className="mb-3">
          <Card style={{ 
            width: "100%", 
            backgroundColor: "#ffffff", 
            border: "none",
            borderRadius: "6px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)"
          }}>
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/${item.image}`} style={{ padding: "10px", borderRadius: "6px 6px 0 0" }} />
            <Card.Body style={{ backgroundColor: "#ffffff", borderRadius: "0 0 6px 6px" }}>
              <LinkContainer to={item.link}>
              <Card.Link style={{ color: "#0066cc" }}>
              <Card.Title style={{ color: "#000000" }}>{item.title}</Card.Title>
              </Card.Link>
              </LinkContainer>
              <Card.Text style={{ color: "#6c757d" }}>{item.summary}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

const Home = ({ user }) => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
    <AnimatedBackground />
    <Layout user={user}>
      <Row className="ml-2">
        <Col>
          <Image src={`${process.env.PUBLIC_URL}/MyFace.jpg`} width={360} className="rounded shadow-sm" />
          <Media media={user.basics} />
        </Col>
        <Col>
          <StyledAboutSection className="mt-5">
            {/* <SectionTitle>About Me</SectionTitle> */}
            <Paragraph>I'm a PhD candidate with{" "}
              <a href="https://vis.khoury.northeastern.edu/people/Cody-Dunne" style={{ color: "#0066cc" }}>
              Cody Dunne
              </a>{" "}
               at Northeastern University's{" "}
              <a href="https://vis.khoury.northeastern.edu/" style={{ color: "#0066cc" }}>
                Data Visualization Lab
              </a>. My research leverages <a href="https://en.wikipedia.org/wiki/Convex_optimization" style={{ color: "#0066cc" }}>convex optimization</a> to create beautiful, easily readable <a href="https://en.wikipedia.org/wiki/Graph_drawing" style={{ color: "#0066cc" }}>graph/network layouts</a>.
              </Paragraph>
              <Paragraph className="mb-0">
              {/* I have a passion for open science and education.  */}
              I love designing graphics, dashboards, and materials that make understanding complex data simple and accessible to everyone—whether that's by finding and wrangling years worth of uncatalogued datasets, creating new visualization techniques with my research, or teaching others what I learn as a tutor, mentor, or teaching assistant.
              {/* Reach out to my via <a className="" href="mailto:wilson.conn@northeastern.edu" style={{ color: "#0066cc" }}>email</a> or any of my socials, I welcome any chance to talk research or ideas! */}
            </Paragraph>
            {/* <Paragraph>
              I have two bachelors' degrees—Computer Science and Mathematics—from the University at Buffalo.
              Go Bills! {<span role="img" aria-label={"heart"}>{String.fromCodePoint('0x2764', '0xFE0F')}</span>}{<span role="img" aria-label={"bison"}>{String.fromCodePoint('0x1F9AC')}</span>}{<span role="img" aria-label={"bheart"}>{String.fromCodePoint('0x1F499')}</span>}
            </Paragraph> */}
          </StyledAboutSection>
        </Col>
      </Row>
      <Row className="ml-3">
        <div>
          <SectionTitle>Selected Papers</SectionTitle>
          <Cards items={user.selectedpapers} />
        </div>
      </Row>
      {/* <Row>
        <div>
          <SectionTitle>Selected Projects</SectionTitle>
          <Cards items={user.selectedprojects} />
        </div>
      </Row> */}
    </Layout>
    </div>
  );
};

export default Home;
