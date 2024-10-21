import React from 'react';
import Layout from '../../components/Layout';
import {Figure, Row, Col, Button} from 'react-bootstrap'
import { Paragraph, PageHeader } from '../../styles';
// import { ProfileLink } from './styles';


const Html = ({ ele }) => {
  if (ele.p) {
    return (
      <Col xs={18} md={12}>
        <Paragraph>{ele.p}</Paragraph>
      </Col>
    );
  } else if (ele.link) {
    var link = ele.link;
    return (
      <Col xs={18} md={12}>
        {link.text}
        <Button variant="link" href={link.url}>
          {link.linkText}
        </Button>
      </Col>
    );
  } else if (ele.image) {
    var image = ele.image;
    return (
      <Col xs={12} md={8}>
        <Figure>
          <Figure.Image
            height={image.height ? image.height : "100%"}
            width={image.width ? image.width : "100%"}
            src={image.src}
          />
          <Figure.Caption>{image.caption}</Figure.Caption>
        </Figure>
      </Col>
    );
  } else if (ele.video) {
    var video = ele.video;
    return (
      <Col xs={9} md={4}>
        <iframe
          width={video.width ? video.width : "100%"}
          height={video.height ? video.height : "100%"}
          src={video.src}
          frameBorder="0"
          allow={video.allow}
          allowFullScreen
        ></iframe>
      </Col>
    );
  } else if (ele && ele.length > 1) {
    return (
      <>
        {ele.map((entry) => (
          <Html ele={entry} />
        ))}
      </>
    );
  } else {
    return <p>else</p>;
  }
};

const Entry = ({ entry }) => {
  return (
    <>
      <Row>
        <h5>{entry.title}</h5>
      </Row>
      {entry.html.map((html) => (
        <Row className="justify-content-md-center">
          <Html ele={html} />
        </Row>
      ))}
      {/* <div dangerouslySetInnerHTML = {{__html:entry.html}}></div> */}
    </>
  );
};

const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      {user.projects.map((section) => (
        <>
          <Row>
            <PageHeader>{section.title}</PageHeader>
          </Row>
          <Row>
            <p>{section.summary}</p>
          </Row>
          {section.entries.map((entry) => (
            <Entry entry={entry} />
          ))}
        </>
      ))}
    </Layout>
  );
};

export default Projects;
