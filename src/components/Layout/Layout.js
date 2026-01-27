import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledContainer = styled(Container)`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-bottom: 0 !important;
`;

const Content = styled.div`
  flex: 1;
`;

const Layout = ({ user, children }) => {
  return (
    <LayoutWrapper>
      <StyledContainer>
        <Header />
        <Content>{children}</Content>
        <Footer user={user} />
      </StyledContainer>
    </LayoutWrapper>
  );
};

export default Layout;
