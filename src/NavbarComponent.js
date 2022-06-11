import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'

const NavbarComponent = () => {
  return (
    <div>
      <Navbar className='shadow-sm p-3 mb-5 bg-body rounded' fixed="top" bg="white" variant="light" expand="lg">
                <Container>
                    <Navbar.Brand className='brand' href="#home">
                      ATools.
                    </Navbar.Brand>

                    <Nav className="ms-auto">
                      <Button className="side-button" variant='outline-dark'>Start Free Trial</Button>
                      <Button className="side-button purple"  variant="dark">Login</Button>
                    
                    </Nav>
                </Container>
            </Navbar>

    </div>
  )
}

export default NavbarComponent