import React, { useState } from 'react';
import './HeaderNav.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import jerinLogo from '../../../Icon/jerinLogo.png';
import { darkTheme, GlobalStyles, lightTheme } from '../../../theme/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faMoon, faUserLarge } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../../hooks/useAuth';

const HeaderNav = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const { user } = useAuth();
    return (
        <>
            <GlobalStyles theme={isDarkTheme ? darkTheme : lightTheme} />
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img style={{ height: '35px' }} src={jerinLogo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle style={{ backgroundColor: '#f21679' }} aria-controls="navbarScroll" />
                    <Navbar.Collapse className="text-end" id="navbarScroll">
                        <Nav className="ms-auto my-2 my-lg-0">
                            <Link to="/home" className="link-style" >Home</Link>
                            <Link to="/services" className="link-style" >Services</Link>
                            <Link to="/orders" className="link-style" >Orders</Link>
                            <Link to="/home" className="link-style" >Contact Us</Link>
                            {user?.email ?
                                <Link to="/profile" style={{ textDecoration: 'none' }} >
                                    <button className="btn" style={{ background: '#f21679', color: 'white' }}> <FontAwesomeIcon icon={faUserLarge} /> </button>
                                </Link>
                                :
                                <Link to="/login" style={{ textDecoration: 'none' }} >
                                    <button className="btn" style={{ background: '#f21679', color: 'white' }}>Login</button>
                                </Link>
                            }
                            <Link to="" style={{ textDecoration: 'none' }} >
                                <button
                                    className={`btn ms-3 ${isDarkTheme ? 'btn-light' : 'btn-dark'}`}
                                    onClick={() => setIsDarkTheme(!isDarkTheme)}
                                >{isDarkTheme ? <FontAwesomeIcon icon={faLightbulb} /> : <FontAwesomeIcon icon={faMoon} />}</button>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default HeaderNav;