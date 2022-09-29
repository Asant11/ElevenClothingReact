import CartWidget from '../CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';

function NavBar(){
    const links=['Prendas', 'Talles', 'Contacto'];
    return(
        <>
            <Navbar className="header"  expand="lg">
            <Navbar.Brand className="navbar_brand"href="#home">ELEVEN CLOTHING</Navbar.Brand>
                <Container className="container__header">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        {links.map((e, idx) => (<Nav.Link className='links' href="#" key={idx}>{e}</Nav.Link>))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <CartWidget />
            </Navbar>
        </>
    )
}

export default NavBar;

