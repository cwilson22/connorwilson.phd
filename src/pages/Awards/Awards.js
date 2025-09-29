import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle } from '../../styles';
import {Row, Col, Image} from 'react-bootstrap'
import { useTheme } from '../../contexts/ThemeContext';
// import { ProfileLink } from './styles';

const AwardInfo = ({entries, colors}) => {
    return (
        <>
        {entries.map(entry => (
            <Row key={entry.title}>
            <Col xs={15} md={10}>
                <p className='mb-1' style={{ color: colors.text }}><b>{entry.title}</b> | {entry.start ? `${entry.start}-${entry.end}` : entry.end}</p>
                <p style={{ color: colors.textSecondary }}>
                    {entry.summary}
                </p>
            </Col>
            </Row>
          ))}
        </>
    )
  }


const Awards = ({ user }) => {
  const { colors } = useTheme();
  
  return (
    <Layout user={user}>
      <div className='ml-1'>
        <SectionTitle id='Awards'>Awards</SectionTitle>
        <AwardInfo entries = {user.awards} colors={colors}/>
      </div>
    </Layout>
  );
};

export default Awards;