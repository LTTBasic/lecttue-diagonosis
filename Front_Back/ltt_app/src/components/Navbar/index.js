import React from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarCotainer,NavLogo,
   MobileIcon, NavMenu,
    NavItem, NavLinks,
  NavBtn, NavBtnLink} from './NavbarElements'
import "./service.css"
const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarCotainer>
          <NavLogo to='/'>LTT</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              {/* <NavLinks to="/services">Services</NavLinks> */}
            <a id = "ser" href="http://127.0.0.1:8000/docs#/" target="_blank">Services</a>
            </NavItem>
            <NavItem>
              <NavLinks to="/services">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/signup">Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
          
        </NavbarCotainer>
      </Nav>
    </>
  );
};

export default Navbar;