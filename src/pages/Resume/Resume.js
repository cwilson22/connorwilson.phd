import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle } from '../../styles';
import { useTheme } from '../../contexts/ThemeContext';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Resume = ({ user }) => {
  const { colors } = useTheme();
  
  return (
    <Layout user={user}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={11} xl={12}>
            <div style={{ 
              backgroundColor: colors.surface, 
              padding: '2rem', 
              borderRadius: '10px',
            //   border: `1px solid ${colors.border}`,
              marginBottom: '2rem'
            }}>
              {/* PDF Viewer */}
              <div style={{ 
                width: '100%', 
                height: '85vh', 
                border: `2px solid ${colors.border}`,
                borderRadius: '8px',
                overflow: 'hidden'
              }}>
                <iframe
                  src={`${process.env.PUBLIC_URL}/resume.pdf#toolbar=1&navpanes=1&scrollbar=1`}
                  width="100%"
                  height="100%"
                  style={{
                    border: 'none',
                    backgroundColor: colors.background
                  }}
                  title="Resume/CV"
                />
              </div>
              
              {/* Download Button */}
              {/* <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <Button
                  variant="primary"
                  href={`${process.env.PUBLIC_URL}/resume.pdf`}
                  download="Connor_Wilson_Resume.pdf"
                  style={{
                    backgroundColor: colors.link,
                    borderColor: colors.link,
                    color: '#ffffff',
                    padding: '0.75rem 2rem',
                    fontSize: '1.1rem',
                    borderRadius: '5px',
                    textDecoration: 'none',
                    display: 'inline-block'
                  }}
                >
                  📄 Download PDF
                </Button>
              </div> */}
              
              {/* Alternative viewing options */}
              <div style={{ 
                textAlign: 'center', 
                marginTop: '1rem',
                color: colors.textSecondary,
                fontSize: '0.9rem'
              }}>
                <p>
                  Last updated September 2025. Trouble viewing? 
                  <a 
                    href={`${process.env.PUBLIC_URL}/resume.pdf`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: colors.link, marginLeft: '0.5rem' }}
                  >
                    Open in new tab
                  </a>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Resume;
