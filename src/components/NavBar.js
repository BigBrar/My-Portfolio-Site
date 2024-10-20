import { useState, useEffect } from 'react';
import React, { Component } from 'react'
import { Navbar, Container} from 'react-bootstrap';

export const NavBar = () =>{
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() =>{
        const onScroll = () =>{
            if (window.scrollY>50){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }
        window.addEventListener('scroll',onScroll);

        return () => window.removeEventListener('scroll',onScroll);
    },[])

    return (
        <Navbar expand="lg" className={scrolled?"scrolled":""}>
        <Container>
            <Navbar.Brand href="#home">
                ExamPrep logo
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" >
                <span className='navbar-toggle-icon'/>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#usage">Usage</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
            </Nav>
            <span className='navbar-text'>
                <div className='social-icon'>
                    <a href='#'>Image here.</a>
                    <a href='#'>Image here.</a>
                    <a href='#'>Image here.</a>
                </div>
                <button className='vvd' onClick={()=>{console.log("COnnect to developer")}}><span>Let's Connect</span></button>
            </span>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}
