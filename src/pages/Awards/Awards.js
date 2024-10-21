import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle } from '../../styles';
import {Row, Col, Image} from 'react-bootstrap'
// import { ProfileLink } from './styles';

const AwardInfo = ({entries}) => {
    return (
        <>
        {entries.map(entry => (
            <Row>
            <Col xs={15} md={10}>
                <p className='mb-1'><b>{entry.title}</b> | {entry.start ? `${entry.start}-${entry.end}` : entry.end}</p>
                <p>
                    {entry.summary}
                </p>
            </Col>
            </Row>
          ))}
        </>
    )
  }


const Awards = ({ user }) => {
  return (
    <Layout user={user}>
      <div className='ml-1'>
        <SectionTitle id='Awards'>Awards</SectionTitle>
        <AwardInfo entries = {user.awards}/>
      </div>
    </Layout>
  );
};

export default Awards;