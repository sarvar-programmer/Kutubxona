import React, { useState } from "react";
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import { translations } from '../../details/translations.js'
import logo from '../../image/logo.png'
import uzb from '../../image/image.png'
import rus from '../../image/image (2).png'
import eng from '../../image/image (3).png'
import { FaChevronDown, FaUser } from 'react-icons/fa';
import '../../css/home/header.css'
import { Link } from "react-router-dom";

export default function Header() {
    const [lang, setLang] = useState("uz");
    const t = translations[lang];

    return (
        <>
            <Navbar className="navbar">
                <Container fluid className="custom">
                    <img src={logo}
                        className="d-inline-block align-top brand_logo"
                        alt="Library Logo" />
                    <Navbar.Brand href="#home" className="text-white brand_name" as={Link} to="/">{t.district}<br />{t.center}<br />{t.name}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav ">
                        <Nav className="me-auto nav_links">
                            <Nav.Link href="#home" className="text-white" as={Link} to="/">{t.home}</Nav.Link>
                            <Nav.Link href="#link" className="text-white" as={Link} to="/News">{t.news}
                            </Nav.Link>
                            <Nav.Link href="#link" className="text-white" as={Link} to="/Books">{t.books}</Nav.Link>
                            <NavDropdown className="infos" title={<span style={{ color: 'white' }}>{t.info}<FaChevronDown className="chevron" size={12}></FaChevronDown></span>} >
                                <Nav.Link href="#link" className="text-white link" as={Link} to="/AKM">AKM haqida</Nav.Link>
                                <Nav.Link href="#link" className="text-white link"  as={Link} to="Rahbariat">Rahbariyat</Nav.Link>
                            </NavDropdown>
                        </Nav>
                        <div className="languages">
                            <NavDropdown title={<span className="lang"><img src={uzb} alt="uzb" className="text-white flag" />O'zbekcha<FaChevronDown className="text-white chevron" size={12}></FaChevronDown></span>} className="text-white custom-nav-dropdown" >
                                <NavDropdown.Item onClick={() => setLang("uz")} href="#action/3.1" className="text-white custom-item"><img src={uzb}  />O'zbekcha</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => setLang("ru")} href="#action/3.2" className="text-white custom-item">
                                    <img src={rus}/> Русский
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => setLang("en")} href="#action/3.3" className="text-white custom-item"><img src={eng}
                                />English</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                        <div className="user">
                            <FaUser  color="white" className="icon" />
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

