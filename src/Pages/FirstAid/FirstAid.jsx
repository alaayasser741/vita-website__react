import React from 'react'
import { Container } from 'react-bootstrap'
import './firstAid.css'
import { Link } from 'react-router-dom';
import headerImg from '../../assets/FirstAid.png';
import first1 from '../../assets/fristAid1.png';
import first2 from '../../assets/fristAid2.png';
import first3 from '../../assets/fristAid3.png';
import first4 from '../../assets/fristAid4.png';

const FirstAid = () => {
  return (
    <div className='firstAid'>
      <Container>
        <div className="firstAid__image">
          <img src={headerImg} alt="Header-image" />
          <h3 className="firstAid__header--title">الإسعافات الاولية</h3>
        </div>
        <div className="firstAid__content">
          <div className="firstAid__box">
            <div className="box__img">
              <img src={first1} alt="FirstAid-img" />
            </div>
            <ul className="FirstAid__Link">
              <li>
                <Link to='/'>الاختناق</Link>
              </li>
              <li>
                <Link to='/'>إصابات البرق</Link>
              </li>
              <li>
                <Link to='/'>الإصابات الكهربائية</Link>
              </li>
              <li>
                <Link to='/'>إنخفاض حرارة الجسم</Link>
              </li>
              <li>
                <Link to='/'>جروح</Link>
              </li>
            </ul>
          </div>
          <div className="firstAid__box">
            <div className="box__img">
              <img src={first2} alt="FirstAid-img" />
            </div>
            <ul className="FirstAid__Link">
              <li>
                <Link to='/'>اولويات الاسعافات الاولية</Link>
              </li>
              <li>
                <Link to='/'>حالات ثني والتواء</Link>
              </li>
              <li>
                <Link to='/'>حروق</Link>
              </li>
              <li>
                <Link to='/'>حروق العين الكيميائية</Link>
              </li>
              <li>
                <Link to='/'>داء المرتفعات</Link>
              </li>
            </ul>
          </div>
          <div className="firstAid__box">
            <div className="box__img">
              <img src={first3} alt="FirstAid-img" />
            </div>
            <ul className="FirstAid__Link">
              <li>
                <Link to='/'>توقف القلب</Link>
              </li>
              <li>
                <Link to='/'>عضََات البشر</Link>
              </li>
              <li>
                <Link to='/'>عضََات الحيوانات</Link>
              </li>
              <li>
                <Link to='/'>قضمة الصقيع</Link>
              </li>
              <li>
                <Link to='/'>لدغات أفعى</Link>
              </li>
            </ul>
          </div>
          <div className="firstAid__box">
            <div className="box__img">
              <img src={first4} alt="FirstAid-img" />
            </div>
            <ul className="FirstAid__Link">
              <li>
                <Link to='/'>الغرق</Link>
              </li>
              <li>
                <Link to='/'>لسعات النحل</Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default FirstAid