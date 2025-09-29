import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle } from '../../styles';
import {Row, Col, Image} from 'react-bootstrap';
import "./style.css";
// import { ProfileLink } from './styles';

const TextInfo = ({entries}) => {
    return (
        <>
        {entries.map(entry => (
            <Row key={entry.title}>
            <Col xs={15} md={10}>
                <p style={{ color: '#000000' }}><b>{entry.title}</b></p>
                <p style={{ color: '#6c757d' }}>
                    {entry.summary}
                </p>
            </Col>
            </Row>
          ))}
        </>
    )
}


const VolunteerInfo = ({entries}) => {
  return (
      <>
      {entries.map(entry => (
          <Row key={entry.position}>
          <Col xs={15} md={10}>
              <p className='mb-1' style={{ color: '#000000' }}><b>{entry.position}</b> | {entry.start ? `${entry.start}-${entry.end}` : entry.end}</p>
              <p style={{ color: '#6c757d' }}>
                  {entry.organization}
              </p>
          </Col>
          </Row>
        ))}
      </>
  )
}


const Publicity = ({ user }) => {
  return (
    <Layout user={user}>
      <div className='ml-1'>
        <SectionTitle id='volunteer'>Volunteer Work</SectionTitle>
        <VolunteerInfo entries = {user.volunteer}/>
      </div>
    </Layout>
  );
};

export default Publicity;