import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import { LinkContainer  } from 'react-router-bootstrap'
import { useSelector } from 'react-redux';

function Header() {

  const userLogin  = useSelector(state => state.userInfo)   
  const { userInfo } = userLogin

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <LinkContainer to='/'>
        <Navbar.Brand>Home</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        
        
        { userInfo ? (
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="profile/">Profile</Link>
          </Nav>
        </Navbar.Collapse>
        ) :
        (
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           <Link to="login/">User</Link>
          </Nav>
        </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
  )
}

export default Header
