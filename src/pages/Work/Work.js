import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle } from '../../styles';
import {Row, Col, Image} from 'react-bootstrap'
import { useTheme } from '../../contexts/ThemeContext';
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


const MediaInfo = ({entries, colors}) => {
    return (
        <>
        {entries.map(entry => (
            <Row key={entry.title}>
            <Col xs={3} md={2}>
                <Image src="logo512.png" thumbnail/>
            </Col>
            <Col xs={12} md={8}>
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


const WorkInfo = ({entries, colors}) => {
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


const EducationInfo = ({entries, colors}) => {
  return (
      <>
      {entries.map(entry => (
          <Row key={entry.position}>
          <Col xs={15} md={10}>
            <p className='mb-1' style={{ color: colors.text }}><b>{entry.position}</b> | {entry.start ? `${entry.start}-${entry.end}` : entry.end}</p>
              <p className='mb-1 ml-2' style={{ color: colors.textSecondary }}>{entry.organization}</p>
              {entry.summary ? <p className='ml-2' style={{ color: colors.textSecondary }}><i>{entry.summary}</i></p> : <p></p>}
          </Col>
          </Row>
        ))}
      </>
  )
}


const Work = ({ user }) => {
  const { colors } = useTheme();
  
  return (
    <Layout user={user}>
      <div className='ml-1'>
        <SectionTitle id='press'>Education</SectionTitle>
        <EducationInfo entries = {user.education} colors={colors}/>
      </div>
      <div className='ml-1'>
        <SectionTitle id='press'>Employment</SectionTitle>
        <EducationInfo entries = {user.workexperience} colors={colors}/>
      </div>
    </Layout>
  );
};

export default Work;