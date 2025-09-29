import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle} from '../../styles';
import { Row, Col} from 'react-bootstrap';
import {StyledImage} from './styles';
import { useTheme } from '../../contexts/ThemeContext';

const BoldName = ({text = ''})=>{
    return (
        <div dangerouslySetInnerHTML={{
            __html: text.replace("Wilson, C", (match, i) => `<b>Wilson, C</b>`)
        }}>

        </div>
      )
}

const Papers = ({papers, colors}) => {
    return (
        <>
        {papers.map(pub => (
            <Row key={pub.title}>
            <Col xs={4} md={2}>
                <a href={pub.url} target="_blank" rel='noreferrer'><StyledImage src={`${process.env.PUBLIC_URL}/${pub.image}`} thumbnail /></a>
            </Col>
            <Col xs={8} md={8}>
                <h4 style={{ color: colors.text }}>{pub.title}</h4>
                <p style={{ color: colors.textSecondary }}>
                    <BoldName text={pub.authors}></BoldName>
                    {pub.venue}
                    {". "}
                    {pub.year}
                    {". "}
                    {pub.doi ? <><span>DOI:</span><a href={pub.fulldoi} style={{ color: colors.link }}>{pub.doi}</a><span>.</span></> : null}
                </p>
                <p style={{ color: colors.textSecondary }}>
                    {pub.url ? <a href={pub.url} style={{ color: colors.link }}>Preprint</a> : null}
                    {pub.supplement ? <span> | </span> : null}
                    {pub.supplement ? <a href={pub.supplement} style={{ color: colors.link }}>Supplement</a> : null}
                    {pub.video ? <span> | </span> : null}
                    {pub.video ? <a href={pub.video} style={{ color: colors.link }}>Video</a> : null}
                    {pub.previewvideo ? <span> | </span> : null}
                    {pub.previewvideo ? <a href={pub.previewvideo} style={{ color: colors.link }}>Preview Video</a> : null}
                    {pub.code ? <span> | </span> : null}
                    {pub.code ? <a href={pub.code} style={{ color: colors.link }}>Code</a> : null}
                    {pub.website ? <span> | </span> : null}
                    {pub.website ? <a href={pub.website} style={{ color: colors.link }}>Website</a> : null}
                </p>
            </Col>
            </Row>
          ))}
        </>
    )
}

const Publications = ({ user }) => {
  const { colors } = useTheme();
  
  return (
    <Layout user={user}>
      <div>
        <SectionTitle></SectionTitle>
        <Papers papers = {user.publications} colors={colors}/>
      </div>
    </Layout>
  );
};

export default Publications;
