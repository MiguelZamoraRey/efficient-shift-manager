import React from 'react';
import logo from '../assets/img/logo.svg';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
            <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            />{' '}
            Efficient shift manager
        </Navbar.Brand>
    </Navbar>
);

export default Header;
