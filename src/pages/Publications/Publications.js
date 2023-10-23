import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle} from '../../styles';
import { Row, Col} from 'react-bootstrap';
import {StyledImage} from './styles';

const BoldName = ({text = ''})=>{
    return (
        <div dangerouslySetInnerHTML={{
            __html: text.replace("Wilson, C", (match, i) => `<b>Wilson, C</b>`)
        }}>

        </div>
      )
}

const Papers = ({papers}) => {
    return (
        <>
        {papers.map(pub => (
            <Row>
            <Col xs={3} md={2}>
                <StyledImage src={pub.image} thumbnail />
            </Col>
            <Col xs={12} md={8}>
                <h4>{pub.title}</h4>
                <p>
                    <BoldName text={pub.authors}></BoldName>
                    {pub.venue}
                    {pub.year}
                </p>
                <p>
                    {pub.url ? <a href={pub.url} >PDF</a> : null}
                    {pub.supplement ? <a href={pub.supplement} > Supplement</a> : null}
                    {pub.video ? <a href={pub.url} > Video</a> : null}
                    {pub.previewvideo ? <a href={pub.previewvideo} > Preview Video</a> : null}
                    {pub.code ? <a href={pub.code} > Code</a> : null}
                    {pub.website ? <a href={pub.website} > Website</a> : null}
                </p>
            </Col>
            </Row>
          ))}
        </>
    )
}

const Publications = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle id='journal'>Journal Publications</SectionTitle>
        <Papers papers = {user.publications.journal}/>
      </div>
      <div>
        <SectionTitle id='conference'>Conference Publications</SectionTitle>
        <Papers papers = {user.publications.conference}/>
      </div>
    </Layout>
  );
};

export default Publications;
