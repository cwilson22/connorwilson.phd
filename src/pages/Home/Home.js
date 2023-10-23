import React from "react";
import Layout from "../../components/Layout";
import { SectionTitle, Paragraph } from "../../styles";
import { Col, Image, Row, Card } from "react-bootstrap";
import Media from "../../components/Media";
// import { ProfileLink } from './styles';

const Cards = ({ items }) => {
  return (
    <Row>
      {items.map((item, index) => (
        <Card key={index} style={{ width: "22rem" }}>
          <Card.Img variant="top" src={process.env.PUBLIC_URL + "/" + item.image} />
          <Card.Body>
            <Card.Link href={item.link}>
            <Card.Title href={item.link}>{item.title}</Card.Title>
            </Card.Link>
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
      <Row>
        <Col>
          <Image src={process.env.PUBLIC_URL + "/MyFace.jpg"} width={360} />
          <Media media={user.basics} />
        </Col>
        <Col>
          <div>
            <SectionTitle>About Me</SectionTitle>
            <Paragraph>{user.basics.summary}</Paragraph>
          </div>
        </Col>
      </Row>
      <Row>
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
