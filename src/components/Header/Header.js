import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import { Nav, Navbar} from 'react-bootstrap';
import { StyledNavMain, StyledNavSub } from './styles';

const items = [
  { name: 'Home', path: '/connorwilson.phd/', 
    subpath:[
      {
      name: 'Bio',
      path: '/connorwilson.phd/'
      },
      {
        name: 'Resume',
        path: '/connorwilson.phd/resume.pdf' 
      },
      {
        name: 'C.V.',
        path: '/connorwilson.phd/cv.pdf' 
      },
    ]
  },
  { name: 'Publications', path: '/connorwilson.phd/publications',
    subpath:[
      {
      name: 'Journal',
      path: '/connorwilson.phd/publications#journal' 
      },
      {
        name: 'Conference',
        path: '/connorwilson.phd/publications#conference' 
      },
    ]
  },
  // { name: 'Projects', path: '/projects',
  //     subpath:[
  //     {
  //     name: 'Research',
  //     path: '/projects#research' 
  //     }
  //   ] 
  // },
  { name: 'Publicity', path: '/connorwilson.phd/publicity',
      subpath:[
      {
      name: 'Awards',
      path: '/connorwilson.phd/publicity#awards' 
      }
    ] 
  },
];

const Header = () => {
  const location = useLocation();

  return (
    // <Navbar expand = "lg" bg="light" variant="light" fixed= "top">
    
    <Navbar fluid="true" expand="lg">
      <Navbar.Brand style={{fontSize: "2rem"}} href="/">Connor Wilson</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          {items.map((i, idx) => (
            <Nav.Item  key={idx} className="flex-column">
              <StyledNavMain style ={{color: "#000000"}}
                element={Link}
                href={i.path}
                key={i.name}
              >
                {i.name}
              </StyledNavMain>
              {i.subpath.map(j => (
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
