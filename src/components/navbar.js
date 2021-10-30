import { Navbar,Nav,Container } from 'react-bootstrap'
function NavbarComponent(){
    return(

        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">To Do Application</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
export default NavbarComponent;