import React from "react";
import News from "./News.js";
import { Nav, Navbar, NavDropdown, Container} from 'react-bootstrap';
import { translations } from '../details/translations.js'
import logo from '../image/logo.png'
import uzb from '../image/image.png'
import rus from '../image/image (2).png'
import eng from '../image/image (3).png'
import {FaChevronDown, FaUser} from 'react-icons/fa';
import '../css/header.css'

export default class Header extends React.Component {

    state = {
        lang: "uz"
    }

    setLang = (lang) => {

        this.setState({
            lang
        });
    };
    render() {
        const t = translations[this.state.lang];
        return (
            <>
                <Navbar className="navbar">
                    <Container>
                        <img src={logo}
                            width="111.5"
                            className="d-inline-block align-top brand_logo"
                            alt="Library Logo" />
                        <Navbar.Brand href="#home" className="text-white brand_name">{t.district}<br />{t.center}<br />{t.name}</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav ">
                            <Nav className="me-auto nav_links">
                                <Nav.Link href="#home" className="text-white po">{t.home}</Nav.Link>
                                <Nav.Link href="#link" className="text-white">{t.news}
                                </Nav.Link>
                                <Nav.Link href="#link" className="text-white">{t.books}</Nav.Link>
                                <NavDropdown className="about" title={<span style={{ color: 'white' }}>{t.info}<FaChevronDown className="chevron" size={12}></FaChevronDown></span>} >
                                    <Nav.Link href="#link" className="text-white link">AKM haqida</Nav.Link>
                                    <Nav.Link href="#link" className="text-white link">Rahbariyat</Nav.Link>
                                </NavDropdown>
                            </Nav>
                            <div className="language">
                                <NavDropdown title={<span><img src={uzb} alt="uzb" className="text-white flag" />O'zbekcha<FaChevronDown className="text-white chevron" size={12}></FaChevronDown></span>} className="text-white custom-nav-dropdown" >
                                    <NavDropdown.Item onClick={() => this.setLang("uz")} href="#action/3.1" className="   text-white custom-item"><img src={uzb} width={30} height={20} />O'zbekcha</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => this.setLang("ru")} href="#action/3.2" className="text-white custom-item">
                                        <img src={rus} width={30} height={20} /> Русский
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => this.setLang("en")} href="#action/3.3" className="text-white custom-item"><img src={eng} width={30} height={20}
                                    />English</NavDropdown.Item>
                                </NavDropdown>
                            </div>
                            <div className="user">
                                <FaUser size={30} color="white" className="icon" />
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}
