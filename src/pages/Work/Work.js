import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle } from '../../styles';
import {Row, Col, Image} from 'react-bootstrap'
// import { ProfileLink } from './styles';

const TextInfo = ({entries}) => {
    return (
        <>
        {entries.map(entry => (
            <Row>
            <Col xs={15} md={10}>
                <p><b>{entry.title}</b></p>
                <p>
                    {entry.summary}
                </p>
            </Col>
            </Row>
          ))}
        </>
    )
}


const MediaInfo = ({entries}) => {
    return (
        <>
        {entries.map(entry => (
            <Row>
            <Col xs={3} md={2}>
                <Image src="logo512.png" thumbnail/>
            </Col>
            <Col xs={12} md={8}>
                <p><b>{entry.title}</b></p>
                <p>
                    {entry.summary}
                </p>
            </Col>
            </Row>
          ))}
        </>
    )
}


const WorkInfo = ({entries}) => {
  return (
      <>
      {entries.map(entry => (
          <Row>
          <Col xs={15} md={10}>
              <p className='mb-1'><b>{entry.position}</b> | {entry.start ? `${entry.start}-${entry.end}` : entry.end}</p>
              <p>
                  {entry.organization}
              </p>
          </Col>
          </Row>
        ))}
      </>
  )
}


const EducationInfo = ({entries}) => {
  return (
      <>
      {entries.map(entry => (
          <Row>
          <Col xs={15} md={10}>
            <p className='mb-1'><b>{entry.position}</b> | {entry.start ? `${entry.start}-${entry.end}` : entry.end}</p>
              <p className='mb-1 ml-2'>{entry.organization}</p>
              {entry.summary ? <p className='ml-2'><i>{entry.summary}</i></p> : <p></p>}
          </Col>
          </Row>
        ))}
      </>
  )
}


const Work = ({ user }) => {
  return (
    <Layout user={user}>
      <div className='ml-1'>
        <SectionTitle id='press'>Education</SectionTitle>
        <EducationInfo entries = {user.education}/>
      </div>
      <div className='ml-1'>
        <SectionTitle id='press'>Employment</SectionTitle>
        <EducationInfo entries = {user.workexperience}/>
      </div>
    </Layout>
  );
};

export default Work;