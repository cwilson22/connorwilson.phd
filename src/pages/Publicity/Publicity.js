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


const VolunteerInfo = ({entries}) => {
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