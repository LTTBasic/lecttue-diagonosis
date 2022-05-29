import React from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarCotainer,NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'

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
              <NavLinks className="navBtn" to="/services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks className="navBtn" to="/about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks className="navBtn" to="/signup">Sign Up</NavLinks>
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