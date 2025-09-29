import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle } from '../../styles';
import {Row, Col, Image} from 'react-bootstrap';
import { useTheme } from '../../contexts/ThemeContext';
import "./style.css";
// import { ProfileLink } from './styles';

const TextInfo = ({entries, colors}) => {
    return (
        <>
        {entries.map(entry => (
            <Row key={entry.title}>
            <Col xs={15} md={10}>
                <p style={{ color: colors.text }}><b>{entry.title}</b></p>
                <p style={{ color: colors.textSecondary }}>
                    {entry.summary}
                </p>
            </Col>
            </Row>
          ))}
        </>
    )
}


const VolunteerInfo = ({entries, colors}) => {
  return (
      <>
      {entries.map(entry => (
          <Row key={entry.position}>
          <Col xs={15} md={10}>
              <p className='mb-1' style={{ color: colors.text }}><b>{entry.position}</b> | {entry.start ? `${entry.start}-${entry.end}` : entry.end}</p>
              <p style={{ color: colors.textSecondary }}>
                  {entry.organization}
              </p>
          </Col>
          </Row>
        ))}
      </>
  )
}


const Publicity = ({ user }) => {
  const { colors } = useTheme();
  
  return (
    <Layout user={user}>
      <div className='ml-1'>
        <SectionTitle id='volunteer'>Volunteer Work</SectionTitle>
        <VolunteerInfo entries = {user.volunteer} colors={colors}/>
      </div>
    </Layout>
  );
};

export default Publicity;