import React from 'react';

import { Link } from 'react-router-dom';
import { Nav, Navbar} from 'react-bootstrap';
import { StyledNavMain, StyledNavSub } from './styles';
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
  // { name: 'Projects', path: '/projects',
  // },
  {
    name: 'Employment', path: '/work',
  },
  { name: 'Volunteerism', path: '/publicity',
    //   subpath:[
    //   {
    //   name: 'Awards',
    //   path: '/publicity#awards' 
    //   }
    // ] 
  },
  {
    name: 'Awards', path: '/awards',
  },
];

const Header = () => {
  // const location = useLocation();

  return (
    // <Navbar expand = "lg" bg="light" variant="light" fixed= "top">
    
    <Navbar fluid="true" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand style={{fontSize: "2rem"}} >Connor Wilson</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          {items.map((i, idx) => (
            <Nav.Item  key={idx} className="flex-column">
              <LinkContainer to={i.path}>
              <StyledNavMain style ={{color: "#000000"}}
                key={i.name}
              >
                {i.name}
              </StyledNavMain>
              </LinkContainer>
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
