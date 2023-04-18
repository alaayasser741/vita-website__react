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
                <Link to='https://www.msdmanuals.com/ar/home/%D8%A7%D9%84%D8%A5%D8%B5%D8%A7%D8%A8%D8%A7%D8%AA-%D9%88%D8%A7%D9%84%D8%AA%D9%91%D9%8E%D8%B3%D9%85%D9%91%D9%8F%D9%85/%D8%A7%D9%84%D8%A5%D8%B3%D8%B9%D9%8E%D8%A7%D9%81%D8%A7%D8%AA%D9%8F-%D8%A7%D9%84%D8%A3%D9%88%D9%91%D9%8E%D9%84%D9%8A%D9%91%D9%8E%D8%A9/%D8%A7%D9%84%D8%A7%D8%AE%D8%AA%D9%86%D8%A7%D9%82-%D8%A3%D9%88-%D8%A7%D9%84%D8%B4%D9%91%D9%8E%D8%B1%D9%8E%D9%82'>الاختناق</Link>
              </li>
              <li>
                <Link to='https://www.msdmanuals.com/ar/home/%D8%A7%D9%84%D8%A5%D8%B5%D8%A7%D8%A8%D8%A7%D8%AA-%D9%88%D8%A7%D9%84%D8%AA%D9%91%D9%8E%D8%B3%D9%85%D9%91%D9%8F%D9%85/%D8%A7%D9%84%D8%A5%D8%B5%D8%A7%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D9%86%D8%A7%D8%AC%D9%85%D8%A9-%D8%B9%D9%86-%D8%A7%D9%84%D8%B5%D8%AF%D9%85%D8%A7%D8%AA-%D8%A7%D9%84%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A6%D9%8A%D8%A9-%D9%88%D8%A7%D9%84%D8%B5%D9%88%D8%A7%D8%B9%D9%82/%D8%A7%D9%84%D8%A5%D8%B5%D8%A7%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D9%86%D8%A7%D8%AC%D9%85%D8%A9-%D8%B9%D9%86-%D8%A7%D9%84%D8%B5%D9%88%D8%A7%D8%B9%D9%82'>إصابات البرق</Link>
              </li>
              <li>
                <Link to='https://www.msdmanuals.com/ar/home/%D8%A7%D9%84%D8%A5%D8%B5%D8%A7%D8%A8%D8%A7%D8%AA-%D9%88%D8%A7%D9%84%D8%AA%D9%91%D9%8E%D8%B3%D9%85%D9%91%D9%8F%D9%85/%D8%A7%D9%84%D8%A5%D8%B5%D8%A7%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D9%86%D8%A7%D8%AC%D9%85%D8%A9-%D8%B9%D9%86-%D8%A7%D9%84%D8%B5%D8%AF%D9%85%D8%A7%D8%AA-%D8%A7%D9%84%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A6%D9%8A%D8%A9-%D9%88%D8%A7%D9%84%D8%B5%D9%88%D8%A7%D8%B9%D9%82/%D8%A7%D9%84%D8%A5%D8%B5%D8%A7%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D9%86%D8%A7%D8%AC%D9%85%D8%A9-%D8%B9%D9%86-%D8%A7%D9%84%D8%B5%D8%AF%D9%85%D8%A7%D8%AA-%D8%A7%D9%84%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A6%D9%8A%D8%A9'>الإصابات الكهربائية</Link>
              </li>
              <li>
                <Link to='https://www.msdmanuals.com/ar/home/%D8%A7%D9%84%D8%A5%D8%B5%D8%A7%D8%A8%D8%A7%D8%AA-%D9%88%D8%A7%D9%84%D8%AA%D9%91%D9%8E%D8%B3%D9%85%D9%91%D9%8F%D9%85/%D8%A5%D8%B5%D8%A7%D8%A8%D8%A7%D8%AA%D9%8F-%D8%A7%D9%84%D8%A8%D8%B1%D8%AF/%D8%A7%D9%86%D8%AE%D9%81%D8%A7%D8%B6%D9%8F-%D8%AD%D9%8E%D8%B1%D8%A7%D8%B1%D9%8E%D8%A9-%D8%A7%D9%84%D8%AC%D8%B3%D9%85-hypothermia'>إنخفاض حرارة الجسم</Link>
              </li>
              <li>
                <Link to='https://www.msdmanuals.com/ar/home/%D8%A7%D9%84%D8%A5%D8%B5%D8%A7%D8%A8%D8%A7%D8%AA-%D9%88%D8%A7%D9%84%D8%AA%D9%91%D9%8E%D8%B3%D9%85%D9%91%D9%8F%D9%85/%D8%A7%D9%84%D8%A5%D8%B3%D8%B9%D9%8E%D8%A7%D9%81%D8%A7%D8%AA%D9%8F-%D8%A7%D9%84%D8%A3%D9%88%D9%91%D9%8E%D9%84%D9%8A%D9%91%D9%8E%D8%A9/%D8%A7%D9%84%D8%AC%D8%B1%D9%88%D8%AD'>جروح</Link>
              </li>
            </ul>
          </div>
          <div className="firstAid__box">
            <div className="box__img">
              <img src={first2} alt="FirstAid-img" />
            </div>
            <ul className="FirstAid__Link">
              <li>
                <Link to='https://www.msdmanuals.com/ar/home/%D8%A7%D9%84%D8%A5%D8%B5%D8%A7%D8%A8%D8%A7%D8%AA-%D9%88%D8%A7%D9%84%D8%AA%D9%91%D9%8E%D8%B3%D9%85%D9%91%D9%8F%D9%85/%D8%A7%D9%84%D8%A5%D8%B3%D8%B9%D9%8E%D8%A7%D9%81%D8%A7%D8%AA%D9%8F-%D8%A7%D9%84%D8%A3%D9%88%D9%91%D9%8E%D9%84%D9%8A%D9%91%D9%8E%D8%A9/%D8%A3%D9%88%D9%84%D9%88%D9%8A%D9%91%D9%8E%D8%A7%D8%AA-%D8%A7%D9%84%D8%A5%D8%B3%D8%B9%D8%A7%D9%81%D8%A7%D8%AA-%D8%A7%D9%84%D8%A3%D9%88%D9%91%D9%8E%D9%84%D9%8A%D8%A9-%D9%81%D9%8A-%D8%AD%D8%A7%D9%84%D8%A7%D8%AA-%D8%A7%D9%84%D8%B7%D9%88%D8%A7%D8%B1%D8%A6'>اولويات الاسعافات الاولية</Link>
              </li>
              <li>
                <Link to='https://www.msdmanuals.com/ar/home/%D8%A7%D9%84%D8%A5%D8%B5%D8%A7%D8%A8%D8%A7%D8%AA-%D9%88%D8%A7%D9%84%D8%AA%D9%91%D9%8E%D8%B3%D9%85%D9%91%D9%8F%D9%85/%D8%A7%D9%84%D8%A5%D8%B3%D8%B9%D9%8E%D8%A7%D9%81%D8%A7%D8%AA%D9%8F-%D8%A7%D9%84%D8%A3%D9%88%D9%91%D9%8E%D9%84%D9%8A%D9%91%D9%8E%D8%A9/%D8%A5%D8%B5%D8%A7%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D9%86%D9%91%D9%8E%D8%B3%D9%8A%D8%AC-%D8%A7%D9%84%D8%B1%D9%91%D9%8E%D8%AE%D9%88'>حالات ثني والتواء</Link>
              </li>
              <li>
                <Link to='https://www.msdmanuals.com/ar/home/%D8%A7%D9%84%D8%A5%D8%B5%D8%A7%D8%A8%D8%A7%D8%AA-%D9%88%D8%A7%D9%84%D8%AA%D9%91%D9%8E%D8%B3%D9%85%D9%91%D9%8F%D9%85/%D8%A7%D9%84%D8%AD%D9%8F%D8%B1%D9%8F%D9%88%D9%82%D9%8F/%D8%A7%D9%84%D8%AD%D9%8F%D8%B1%D9%88%D9%82'>حروق</Link>
              </li>
              <li>
                <Link to='https://www.msdmanuals.com/ar/home/%D8%A7%D9%84%D8%A5%D8%B5%D8%A7%D8%A8%D8%A7%D8%AA-%D9%88%D8%A7%D9%84%D8%AA%D9%91%D9%8E%D8%B3%D9%85%D9%91%D9%8F%D9%85/%D8%A5%D8%B5%D8%A7%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D8%B9%D9%8A%D9%86/%D8%AD%D8%B1%D9%88%D9%82-%D9%81%D9%8A-%D8%A7%D9%84%D8%B9%D9%8A%D9%86'>حروق العين الكيميائية</Link>
              </li>
              <li>
                <Link to='https://www.msdmanuals.com/ar/home/%D8%A7%D9%84%D8%A5%D8%B5%D8%A7%D8%A8%D8%A7%D8%AA-%D9%88%D8%A7%D9%84%D8%AA%D9%91%D9%8E%D8%B3%D9%85%D9%91%D9%8F%D9%85/%D8%A3%D9%85%D8%B1%D9%8E%D8%A7%D8%B6-%D8%A7%D9%84%D9%85%D9%8F%D8%B1%D8%AA%D9%8E%D9%81%D8%B9%D8%A7%D8%AA%D9%90/%D8%A3%D9%85%D8%B1%D8%A7%D8%B6-%D8%A7%D9%84%D9%85%D9%8F%D8%B1%D8%AA%D9%8E%D9%81%D8%B9%D8%A7%D8%AA'>داء المرتفعات</Link>
              </li>
            </ul>
          </div>
          <div className="firstAid__box">
            <div className="box__img">
              <img src={first3} alt="FirstAid-img" />
            </div>
            <ul className="FirstAid__Link">
              <li>
                <Link to='https://www.msdmanuals.com/ar/home/%D8%A7%D8%B6%D8%B7%D8%B1%D8%A7%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D9%82%D9%84%D8%A8-%D9%88%D8%A7%D9%84%D8%A3%D9%88%D8%B9%D9%90%D9%8A%D8%A9-%D8%A7%D9%84%D8%AF%D9%91%D9%8E%D9%85%D9%88%D9%8A%D9%91%D9%8E%D8%A9/%D9%81%D8%B4%D9%84-%D8%A7%D9%84%D9%82%D9%84%D8%A8/%D9%81%D8%B4%D9%84-%D8%A7%D9%84%D9%82%D9%84%D8%A8?query=%D8%AA%D9%88%D9%82%D9%81%20%D8%A7%D9%84%D9%82%D9%84%D8%A8'>توقف القلب</Link>
              </li>
              <li>
                <Link to='https://www.msdmanuals.com/ar/home/%D8%A7%D9%84%D8%A5%D8%B5%D8%A7%D8%A8%D8%A7%D8%AA-%D9%88%D8%A7%D9%84%D8%AA%D9%91%D9%8E%D8%B3%D9%85%D9%91%D9%8F%D9%85/%D8%A7%D9%84%D9%84%D9%91%D9%8E%D8%AF%D8%BA%D9%8E%D8%A7%D8%AA-%D9%88%D8%A7%D9%84%D9%84%D8%B3%D9%91%D9%8E%D8%B9%D8%A7%D8%AA/%D8%B9%D8%B6%D9%91%D9%8E%D8%A7%D8%AA-%D8%A7%D9%84%D8%A8%D8%B4%D8%B1'>عضََات البشر</Link>
              </li>
              <li>
                <Link to='https://www.msdmanuals.com/ar/home/%D8%A7%D9%84%D8%A5%D8%B5%D8%A7%D8%A8%D8%A7%D8%AA-%D9%88%D8%A7%D9%84%D8%AA%D9%91%D9%8E%D8%B3%D9%85%D9%91%D9%8F%D9%85/%D8%A7%D9%84%D9%84%D9%91%D9%8E%D8%AF%D8%BA%D9%8E%D8%A7%D8%AA-%D9%88%D8%A7%D9%84%D9%84%D8%B3%D9%91%D9%8E%D8%B9%D8%A7%D8%AA/%D8%B9%D8%B6%D9%91%D9%8E%D8%A7%D8%AA-%D8%A7%D9%84%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA'>عضََات الحيوانات</Link>
              </li>
              <li>
                <Link to='https://www.msdmanuals.com/ar/home/%D8%A7%D9%84%D8%A5%D8%B5%D8%A7%D8%A8%D8%A7%D8%AA-%D9%88%D8%A7%D9%84%D8%AA%D9%91%D9%8E%D8%B3%D9%85%D9%91%D9%8F%D9%85/%D8%A5%D8%B5%D8%A7%D8%A8%D8%A7%D8%AA%D9%8F-%D8%A7%D9%84%D8%A8%D8%B1%D8%AF/%D9%82%D9%8E%D8%B6%D9%85%D9%8E%D8%A9-%D8%A3%D9%88-%D8%B9%D8%B6%D9%91%D9%8E%D8%A9-%D8%A7%D9%84%D8%B5%D9%91%D9%8E%D9%82%D9%8A%D8%B9-frostbite'>قضمة الصقيع</Link>
              </li>
              <li>
                <Link to='https://www.msdmanuals.com/ar/home/%D8%A7%D9%84%D8%A5%D8%B5%D8%A7%D8%A8%D8%A7%D8%AA-%D9%88%D8%A7%D9%84%D8%AA%D9%91%D9%8E%D8%B3%D9%85%D9%91%D9%8F%D9%85/%D8%A7%D9%84%D9%84%D9%91%D9%8E%D8%AF%D8%BA%D9%8E%D8%A7%D8%AA-%D9%88%D8%A7%D9%84%D9%84%D8%B3%D9%91%D9%8E%D8%B9%D8%A7%D8%AA/%D9%84%D8%AF%D8%BA%D8%A7%D8%AA-%D8%A7%D9%84%D8%A3%D9%81%D8%A7%D8%B9%D9%8A'>لدغات أفعى</Link>
              </li>
            </ul>
          </div>
          <div className="firstAid__box">
            <div className="box__img">
              <img src={first4} alt="FirstAid-img" />
            </div>
            <ul className="FirstAid__Link">
              <li>
                <Link to='https://www.msdmanuals.com/ar/home/%D8%A7%D9%84%D8%A5%D8%B5%D8%A7%D8%A8%D8%A7%D8%AA-%D9%88%D8%A7%D9%84%D8%AA%D9%91%D9%8E%D8%B3%D9%85%D9%91%D9%8F%D9%85/%D8%A7%D9%84%D8%BA%D9%8E%D8%B1%D9%8E%D9%82/%D8%BA%D9%8E%D8%B1%D9%8E%D9%82'>الغرق</Link>
              </li>
              <li>
                <Link to='https://www.msdmanuals.com/ar/home/%D8%A7%D9%84%D8%A5%D8%B5%D8%A7%D8%A8%D8%A7%D8%AA-%D9%88%D8%A7%D9%84%D8%AA%D9%91%D9%8E%D8%B3%D9%85%D9%91%D9%8F%D9%85/%D8%A7%D9%84%D9%84%D9%91%D9%8E%D8%AF%D8%BA%D9%8E%D8%A7%D8%AA-%D9%88%D8%A7%D9%84%D9%84%D8%B3%D9%91%D9%8E%D8%B9%D8%A7%D8%AA/%D9%84%D8%B3%D8%B9%D8%A7%D8%AA-%D8%A7%D9%84%D9%86%D8%AD%D9%84-%D9%88%D8%A7%D9%84%D8%AF%D8%A8%D8%A7%D8%A8%D9%8A%D8%B1-%D9%88%D8%A7%D9%84%D8%B2%D9%86%D8%A7%D8%A8%D9%8A%D8%B1-%D9%88%D8%A7%D9%84%D9%86%D9%85%D9%84'>لسعات النحل</Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default FirstAid