import React, { useState } from 'react'
import './login.css'
import { Container } from 'react-bootstrap'
import logo from '../../assets/loginLogo.png'
import { UilLinkedinAlt, UilInstagram, UilYoutube, UilFacebookF, UilTwitter } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom';

const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className='section login'>
      <Container>
        <div className="form__box">
          <form action="">
            <h2>تسجيل دخول</h2>
            <input required type="email" placeholder='البريد الالكتروني' />
            <input required type="password" placeholder='كلمة المرور' />
            <input type="submit" value="تسجيل دخول" />
            <p>ليس لديك حساب ؟ <Link to="/signup">سجل الان</Link></p>
          </form>
          <div className="form__info">
            <div className="logo__info">
              <img src={logo} alt="Logo" />
              <p>المنصة الطبية العربية  التي تُعنى بتقديم المحتوى الطبي الموثوق،</p>
            </div>
            <div className="social__info">
              <div className="social__links">
                <a href="#"><UilInstagram size="18px" /></a>
                <a href="#"><UilLinkedinAlt size="18px" /></a>
                <a href="#"><UilYoutube size="18px" /></a>
                <a href="#"><UilFacebookF size="18px" /></a>
                <a href="#"><UilTwitter size="18px" /></a>
              </div>
              <p>حقوق النشر محفوظة 2023 © الطبي</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Login