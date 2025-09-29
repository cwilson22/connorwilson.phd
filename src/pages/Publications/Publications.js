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
            <Row key={pub.title}>
            <Col xs={4} md={2}>
                <a href={pub.url} target="_blank" rel='noreferrer'><StyledImage src={`${process.env.PUBLIC_URL}/${pub.image}`} thumbnail /></a>
            </Col>
            <Col xs={8} md={8}>
                <h4 style={{ color: "#000000" }}>{pub.title}</h4>
                <p style={{ color: "#6c757d" }}>
                    <BoldName text={pub.authors}></BoldName>
                    {pub.venue}
                    {". "}
                    {pub.year}
                    {". "}
                    {pub.doi ? <><span>DOI:</span><a href={pub.fulldoi} style={{ color: "#0066cc" }}>{pub.doi}</a><span>.</span></> : null}
                </p>
                <p style={{ color: "#6c757d" }}>
                    {pub.url ? <a href={pub.url} style={{ color: "#0066cc" }}>Preprint</a> : null}
                    {pub.supplement ? <span> | </span> : null}
                    {pub.supplement ? <a href={pub.supplement} style={{ color: "#0066cc" }}>Supplement</a> : null}
                    {pub.video ? <span> | </span> : null}
                    {pub.video ? <a href={pub.video} style={{ color: "#0066cc" }}>Video</a> : null}
                    {pub.previewvideo ? <span> | </span> : null}
                    {pub.previewvideo ? <a href={pub.previewvideo} style={{ color: "#0066cc" }}>Preview Video</a> : null}
                    {pub.code ? <span> | </span> : null}
                    {pub.code ? <a href={pub.code} style={{ color: "#0066cc" }}>Code</a> : null}
                    {pub.website ? <span> | </span> : null}
                    {pub.website ? <a href={pub.website} style={{ color: "#0066cc" }}>Website</a> : null}
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
