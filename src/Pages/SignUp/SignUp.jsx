import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import logo from '../../assets/loginLogo.png'
import { UilLinkedinAlt, UilInstagram, UilYoutube, UilFacebookF, UilTwitter } from '@iconscout/react-unicons'
import './signup.css'
const SignUp = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [coPassword, setCoPassword] = useState('');
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);

  function handleEmailChange() {
    // Validate email using regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailRegex.test(email);
    setValidEmail(isValidEmail);
  }
  function handlePasswordChange() {
    // Validate Password using regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValidPassword = passwordRegex.test(password);
    setValidPassword(isValidPassword);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    handleEmailChange();
    handlePasswordChange();

  }
  return (
    <div className='section sign'>
      <Container>
        <div className="form__box">
          <form action="" onSubmit={handleSubmit}>
            <h2>انشاء حساب جديد</h2>
            <input type="text" autoComplete="name" value={name} required placeholder='الاسم' onChange={(e) => {
              setName(e.target.value);
            }} />

            <input type="email" autoComplete="email" className={validEmail === false ? "invalid" : ''} required value={email} placeholder='البريد الالكتروني' onChange={(e) => {
              setEmail(e.target.value);
            }} />

            <input type="password" className={validPassword === false ? "invalid" : ''} autoComplete="current-password" value={password} required placeholder='كلمة المرور' onChange={(e) => {
              setPassword(e.target.value);
            }} />

            <input type="password" value={coPassword} required placeholder='تأكيد كلمة المرور' onChange={(e) => {
              setCoPassword(e.target.value);
            }} />
            {validPassword === false ? <span style={{ color: "red" }}> الرجاء ادخل كلمة سر مكونة من 8 ارقام وحروف كبيرة وصغيرة ورموز</span> : password !== coPassword ? <span style={{ color: "red" }}>تأكيد كلمة السر مختلف بالرجاء التأكد بانه متطابق</span> : null}
            {!validEmail && <span style={{ color: "red" }}>الرجاء ادخال بريد الكتروني صحيح</span>}
            <input type="submit" value="انشاء حساب" />
            <p>هل لديك حساب بالفعل ؟ <Link to="/login">انضم الان</Link></p>
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

export default SignUp