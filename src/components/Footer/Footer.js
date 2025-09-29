import React from 'react';
import Media from "../Media";
import { useTheme } from '../../contexts/ThemeContext';
import { StyledFooter, StyledFooterContent } from '../Header/styles';
import { useLocation } from 'react-router-dom';

const Footer = ({user}) => {
  const basics = user.basics;
  const { colors, isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();
  const isHomepage = location.pathname === '/';
  
  return (
    <StyledFooter showHoverShadow={isHomepage}>
      <StyledFooterContent>
        {/* <hr style={{ borderColor: colors.hr }} /> */}
        <Media media ={basics} />
        <div style={{ textAlign: 'center', marginTop: '20px', color: colors.textMuted, fontSize: '0.9rem' }}>
          © 2025 Connor Wilson
        </div>
        {/* <div className="col-6 col-md">
        <p style={{color: colors.textMuted}}>This site was built using React and React-Bootstrap.</p>
                <button 
                  className="theme-toggle" 
                  onClick={toggleTheme}
                  style={{ marginLeft: '1rem' }}
                >
                  {isDarkMode ? '☀️' : '🌙'}
                </button>
        </div> */}
      </StyledFooterContent>
    </StyledFooter>
  );
};

export default Footer
