import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from "../../assets/logo.png"
import header from './header.css';
import { UilSearch } from '@iconscout/react-unicons'
const Header = () => {
    // Toggle Menu
    const [toggle, showMenu] = useState(false);
    return (
        <Navbar className='header' expand="lg">
            <Container >
                <Link className="nav__logo" to='/'>
                    <img src={logo} alt='logo' />
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" style={{ gap: "3rem" }}>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px', gap: "1.5rem" }}
                        navbarScroll
                    >

                        <li className="nav__item">
                            <Link to="/" className="nav__link">الرئيسية</Link>

                        </li>
                        <li className="nav__item">
                            <Link to="/subjects" className="nav__link">الموضوعات الصحية

                            </Link>

                        </li>
                        <li className="nav__item">
                            <Link to="/viewCalc" className="nav__link">حاسبات طبية

                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/firstAid" className="nav__link">الإسعافات الاولية

                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/courses" className="nav__link">دورات تدريبية

                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/news" className="nav__link">الاخبار

                            </Link>
                        </li>

                    </Nav>

                    <form>
                        <input className='search-input' type="search" placeholder='بحث' />
                        <UilSearch size="1.3rem" className="search-icon" />
                        <button className="button nav__singUp"><Link to="/signup">تسجيل</Link></button>
                    </form>


                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header