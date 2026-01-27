import React, { useState, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';
import { Nav, Navbar} from 'react-bootstrap';
import { StyledNavMain, StyledNavSub, StyledBrand } from './styles';
import { LinkContainer } from 'react-router-bootstrap';

const items = [
  { name: 'Home', path: '/', 
    // subpath:[
    //   {
    //   name: 'Bio',
    //   path: '/'
    //   },
    //   {
    //     name: 'Resume',
    //     path: '/resume.pdf' 
    //   },
    //   {
    //     name: 'C.V.',
    //     path: '/cv.pdf' 
    //   },
    // ]
  },
  { name: 'Publications', path: '/publications',
    // subpath:[
    //   {
    //   name: 'Journal',
    //   path: '/publications#journal' 
    //   },
    //   {
    //     name: 'Conference',
    //     path: '/publications#conference' 
    //   },
    // ]
  },
  {
    name: 'Projects', path: '/projects',
  },
  // {
  //   name: 'Employment', path: '/work',
  // },
  // { name: 'Service', path: '/publicity',
  //   //   subpath:[
  //   //   {
  //   //   name: 'Awards',
  //   //   path: '/publicity#awards' 
  //   //   }
  //   // ] 
  // },
  // {
  //   name: 'Awards', path: '/awards',
  // },
  {
    name: 'Resume/CV', path: '/resume',
  },
];

const Header = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 750);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 750);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleResumeClick = (e) => {
    if (isMobile) {
      e.preventDefault();
      window.open(`${process.env.PUBLIC_URL}/resume.pdf`, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    // <Navbar expand = "lg" bg="light" variant="light" fixed= "top">
    
    <Navbar fluid="true" expand="md">
      <LinkContainer to="/">
        <Navbar.Brand>
          <StyledBrand>Connor Wilson</StyledBrand>
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          {items.map((i, idx) => (
            <Nav.Item  key={idx} className="flex-column">
              {i.name === 'Resume/CV' && isMobile ? (
                <StyledNavMain
                  key={i.name}
                  $isActive={false}
                  href={`${process.env.PUBLIC_URL}/resume.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleResumeClick}
                >
                  {i.name}
                </StyledNavMain>
              ) : (
                <LinkContainer to={i.path}>
                  <StyledNavMain
                    key={i.name}
                    $isActive={location.pathname === i.path}
                  >
                    {i.name}
                  </StyledNavMain>
                </LinkContainer>
              )}
              {i.subpath && i.subpath.map(j => (
                  <StyledNavSub
                    element={Link}
                    href={j.path}
                    key={j.name}
                  >
                    {j.name}
                  </StyledNavSub>
              ))}
            </Nav.Item>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
