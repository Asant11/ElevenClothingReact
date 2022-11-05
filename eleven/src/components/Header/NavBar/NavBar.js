import CartWidget from './CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import{Link} from 'react-router-dom';

function NavBar(){
    // const links=['Hoodies', 'Shirts', 'Shorts'];
    return(
        <>
            <Navbar className="header"  expand="lg">
                <Link to="/">
                    <Navbar.Brand className="navbar_brand"href="#">ELEVEN CLOTHING</Navbar.Brand>
                </Link>
                <Container className="container__header">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/category/Hoodies" className='navbar__links'>Hoodies</Link>
                            <Link to="/category/Shirts" className='navbar__links'>Shirts</Link>
                            <Link to="/category/Shorts" className='navbar__links'>Shorts</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <Link className='navbar__links' to="/cart">
                    <CartWidget />
                </Link>
            </Navbar>
        </>
    )
}

export default NavBar;

