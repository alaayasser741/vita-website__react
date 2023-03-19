import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import logo from "../../assets/logo.png"
const Header = () => {
    return (
        <header>
            <Container>
                <Link to='/'>
                    <img src={logo} alt='logo' />
                </Link>
                <nav>
                    <ul className="nav__links">
                        <li className="nav__link">
                            <Link to="/">الرئيسية</Link>
                        </li>
                        <li className="nav__link">
                            <Link to="/subjects">الموضوعات الصحية</Link>
                        </li>
                        <li className="nav__link">
                            <Link to="/calculations">حاسبات طبية</Link>
                        </li>
                        <li className="nav__link">
                            <Link to="/viewCalc">الإسعافات الاولية</Link>
                        </li>
                        <li className="nav__link">
                            <Link to="/firstAid">دورات تدريبية</Link>
                        </li>
                        <li className="nav__link">
                            <Link to="/news">الاخبار</Link>
                        </li>
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header