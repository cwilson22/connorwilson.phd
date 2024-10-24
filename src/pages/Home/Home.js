import React from "react";
import Layout from "../../components/Layout";
import { SectionTitle, Paragraph } from "../../styles";
import { Col, Image, Row, Card } from "react-bootstrap";
import Media from "../../components/Media";
import { LinkContainer } from "react-router-bootstrap";
// import { ProfileLink } from './styles';

const Cards = ({ items }) => {
  return (
    <Row>
      {items.map((item, index) => (
        <Card key={index} style={{ width: "22rem" }}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <LinkContainer to={item.link}>
            <Card.Link>
            <Card.Title>{item.title}</Card.Title>
            </Card.Link>
            </LinkContainer>
            <Card.Text>{item.summary}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Row>
  );
};

const Home = ({ user }) => {
  return (
    <Layout user={user}>
      <Row className="ml-2">
        <Col>
          <Image src={"MyFace.jpg"} width={360} />
          <Media media={user.basics} />
        </Col>
        <Col>
          <div>
            <SectionTitle>About Me</SectionTitle>
            <Paragraph>I am a PhD student with{" "}
              <a href="https://vis.khoury.northeastern.edu/people/Cody-Dunne">
              Cody Dunne
              </a>{" "}
               at Northeastern University's{" "}
              <a href="https://vis.khoury.northeastern.edu/">
                Data Visualization Lab
              </a><span> </span>
              in Boston, MA. My research centers on network visualization, with a focus on quantifying and evaluating aesthetics in network layouts by leveraging optimization modeling.
              </Paragraph>
              <Paragraph>
              {/* I have a passion for open science and education.  */}
              I love being able to make information available for anyone to use—whether that's by being a tutor or teaching assistant, finding and wrangling years worth of uncatalogued benchmark datasets, or creating new scalable visualization techniques with my research.
              Reach out to my via <a className="" href="mailto:wilson.conn@northeastern.edu">email</a> or any of my socials, I welcome any chance to talk research or ideas!
            </Paragraph>
            <Paragraph>
              I have two bacholors' degrees—Computer Science and Mathematics—from the University at Buffalo.
              Go Bills! {<span role="img" aria-label={"heart"}>{String.fromCodePoint('0x2764', '0xFE0F')}</span>}{<span role="img" aria-label={"bison"}>{String.fromCodePoint('0x1F9AC')}</span>}{<span role="img" aria-label={"bheart"}>{String.fromCodePoint('0x1F499')}</span>}
            </Paragraph>
          </div>
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
  );
};

export default Home;
