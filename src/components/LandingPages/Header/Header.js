import React, { useState, useEffect } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import logopic from './NitLogo.png';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from 'reactstrap';
import styles from './Header.module.css';
import { isMobile } from 'react-device-detect';

function Header() {
  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const scrollListener = document.addEventListener('scroll', () => {
      const pos = document.scrollingElement.scrollTop;
      if (pos >= 100) {
        if (!navbar) setNavbar(true);
      } else {
        if (navbar) setNavbar(false);
      }
    });
    return () => {
      document.removeEventListener('scroll', scrollListener);
    };
  }, [navbar]);

  const toggle = () => {
    setOpen((prevState) => {
      return prevState ^ 1;
    });
  };

  return (
    <>
      <Navbar
        expand="lg"
        className={styles['wrap-container']}
        fixed="top"
        style={{
          background: navbar ? 'white' : isMobile ? 'black' : 'transparent',
        }}
      >
        <NavbarBrand>
          <NavHashLink exact="true" to="/#home-slider" smooth>
            <img
              src={logopic}
              alt="Nith Logo"
              height="60px"
              // width="80px"
            />
          </NavHashLink>
        </NavbarBrand>
        <NavbarToggler
          className={`${
            styles[`navbar-toggler${navbar ? '-active' : ''}`]
          } mx-2`}
          onClick={toggle}
        ></NavbarToggler>
        <Collapse navbar isOpen={open}>
          <Nav navbar className={`ms-auto ${styles['navbar-nav']}`}>
            <NavItem className={styles['nav-items']}>
              <NavHashLink
                exact="true"
                to="/#home-slider"
                className={styles['nav-links']}
                onClick={() => {
                  setOpen(false);
                }}
                style={({ isActive }) => {
                  return {
                    color: isActive
                      ? '#b54949'
                      : navbar
                      ? '#000'
                      : 'rgba(255, 255, 255, 0.9)',
                  };
                }}
                smooth
              >
                Home
              </NavHashLink>
            </NavItem>
            <NavItem className={styles['nav-items']}>
              <NavHashLink
                exact="true"
                to="/about#about"
                className={styles['nav-links']}
                onClick={() => {
                  setOpen(false);
                }}
                style={({ isActive }) => {
                  return {
                    color: isActive
                      ? '#b54949'
                      : navbar
                      ? '#000'
                      : 'rgba(255, 255, 255, 0.9)',
                  };
                }}
                smooth
              >
                About us
              </NavHashLink>
            </NavItem>
            
           
        
            <NavItem className={styles['nav-items']}>
              <NavHashLink
                exact="true"
                to="/gallery#gallery"
                className={styles['nav-links']}
                onClick={() => {
                  setOpen(false);
                }}
                style={({ isActive }) => {
                  return {
                    color: isActive
                      ? '#b54949'
                      : navbar
                      ? '#000'
                      : 'rgba(255, 255, 255, 0.9)',
                  };
                }}
                smooth
              >
                
                Gallery
              </NavHashLink>
            </NavItem>
            <NavItem className={styles['nav-items']}>
              <NavHashLink
                exact="true"
                to="/team#team"
                className={styles['nav-links']}
                onClick={() => {
                  setOpen(false);
                }}
                style={({ isActive }) => {
                  return {
                    color: isActive
                      ? '#b54949'
                      : navbar
                      ? '#000'
                      : 'rgba(255, 255, 255, 0.9)',
                  };
                }}
                smooth
              >
                Our Team
              </NavHashLink>
            </NavItem>
            <NavItem className={styles['nav-items']}>
              <NavHashLink
                exact="true"
                to="/#contactus"
                className={styles['nav-links']}
                onClick={() => {
                  setOpen(false);
                }}
                style={{ color: navbar ? '#000' : 'rgba(255, 255, 255, 0.9)' }}
                smooth
              >
                Contact Us
              </NavHashLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default Header;
