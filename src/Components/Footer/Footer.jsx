import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.png";
import { UilFacebookF, UilTwitter, UilYoutube, UilLinkedinAlt, UilInstagram } from '@iconscout/react-unicons';
import './footer.css';
const Footer = () => {
  return (
    <footer>
      <div className="main__footer">
        <Container>
          <Link to='/'><img src={logo} alt="" className="footer__logo" /></Link>
          <div className="main_footer__content">
            <div className="main_footer__links">
              <h3>المنصة الطبية العربية  التي تُعنى بتقديم المحتوى الطبي الموثوق،</h3>
              <div className="footer__links-container">
                <a href="#">من نحن</a>
                <a href="#">شروط الاستخدام</a>
                <a href="mailto:alaayasser2018@email.com">اعلان في الموقع</a>
              </div>
            </div>
            <div className="newsletter">
              <h3>النشرة الاخبارية</h3>
              <span>انضم إلى قائمتنا البريدية واحصل على أحدث المقالات والأخبار الطبية</span>
              <form >
                <input type="email" required placeholder='البريد الألكتروني' />
                <input type="submit" value="اشترك الان" />
              </form>
            </div>
          </div>
        </Container>
      </div>
      <div className="right__footer">
        <Container>
          <div className="copyRight">
            <span>فيتا حياة لا يزوّد استشارة طبية، تشخيص او علاج. استعمال الموقع لا يستبدل مسؤولية الزائر باستشارة طبيب مختص.</span>
            <span>حقوق النشر محفوظة 2023 © فيتا حياة</span>
          </div>
          <div className="social">
            <a href="#">
              <UilFacebookF className="social-icon" size="1rem" />
            </a>
            <a href="#">
              <UilTwitter className="social-icon" size="1rem" />
            </a>
            <a href="#">
              <UilYoutube className="social-icon" size="1rem" />
            </a>
            <a href="#">
              <UilLinkedinAlt className="social-icon" size="1rem" />
            </a>
            <a href="#">
              <UilInstagram className="social-icon" size="1rem" />
            </a>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer