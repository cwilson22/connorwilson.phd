import React from 'react';
import Media from "../Media";
import { StyledFooter, StyledFooterContent } from '../Header/styles';
import { useLocation } from 'react-router-dom';

const Footer = ({user}) => {
  const basics = user.basics;
  const location = useLocation();
  const isHomepage = location.pathname === '/';
  
  return (
    <StyledFooter showHoverShadow={isHomepage}>
      <StyledFooterContent>
        {!isHomepage && <Media media ={basics} />}
        <div style={{ textAlign: 'center', marginTop: '20px', color: '#6c757d', fontSize: '0.9rem' }}>
          © 2026 Connor Wilson
        </div>
      </StyledFooterContent>
    </StyledFooter>
  );
};

export default Footer
