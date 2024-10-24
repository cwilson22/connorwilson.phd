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
                <a href={pub.url} target="_blank" rel='noreferrer'><StyledImage src={pub.image} thumbnail /></a>
            </Col>
            <Col xs={12} md={8}>
                <h4>{pub.title}</h4>
                <p>
                    <BoldName text={pub.authors}></BoldName>
                    {pub.venue}
                    {". "}
                    {pub.year}
                    {". "}
                    {pub.doi ? <><span>DOI:</span><a href={pub.fulldoi}>{pub.doi}</a><span>.</span></> : null}
                </p>
                <p>
                    {pub.url ? <a href={pub.url} >Preprint</a> : null}
                    {pub.supplement ? <span> | </span> : null}
                    {pub.supplement ? <a href={pub.supplement} >Supplement</a> : null}
                    {pub.video ? <span> | </span> : null}
                    {pub.video ? <a href={pub.video} >Video</a> : null}
                    {pub.previewvideo ? <span> | </span> : null}
                    {pub.previewvideo ? <a href={pub.previewvideo} >Preview Video</a> : null}
                    {pub.code ? <span> | </span> : null}
                    {pub.code ? <a href={pub.code} >Code</a> : null}
                    {pub.website ? <span> | </span> : null}
                    {pub.website ? <a href={pub.website} >Website</a> : null}
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
        <SectionTitle></SectionTitle>
        <Papers papers = {user.publications}/>
      </div>
    </Layout>
  );
};

export default Publications;
