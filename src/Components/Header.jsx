import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar className="bg-info sticky-top">
        <Container>
          <Link to={"/"} style={{textDecoration:"none"}}>

          <Navbar.Brand style={{color:"white",fontSize:"30px"}}>
          <i className="fa-solid fa-music me-4"></i>
           
            Media Player
          </Navbar.Brand>


          </Link>
         
        </Container>
      </Navbar>
  )
}

export default Header