import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import imgHeader from '../../assets/sub-header.png'
import './subject.css'
const Subjects = () => {
  return (
    <div className="subject">
      <Container>
        <div className="subject__image">
          <img src={imgHeader} alt="Header-image" />
          <h3 className="subject__header--title">موضوعات طبية</h3>
        </div>
        <div className="subject__content">
          <ul className="subject__titles">
            <li>
              <Link to="https://www.msdmanuals.com/ar/home/%D8%A3%D8%B3%D8%A7%D8%B3%D9%8A%D9%91%D9%8E%D8%A7%D8%AA">اساسيات</Link>
            </li>
            <li>
              <Link to="https://www.msdmanuals.com/ar/home/%D8%A7%D8%B6%D8%B7%D8%B1%D8%A7%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D8%A3%D8%B0%D9%86-%D9%88%D8%A7%D9%84%D8%A3%D9%86%D9%81-%D9%88%D8%A7%D9%84%D8%AD%D9%86%D8%AC%D8%B1%D8%A9">اضطرابات الأذن والأنف والحنجرة</Link>
            </li>
            <li>
              <Link to="https://www.msdmanuals.com/ar/home/%D8%A7%D8%B6%D8%B7%D8%B1%D8%A7%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D8%AA%D8%BA%D8%B0%D9%8A%D8%A9">اضطرابات التغذية</Link>
            </li>
            <li>
              <Link to="https://www.msdmanuals.com/ar/home/%D8%A7%D8%B6%D8%B7%D8%B1%D8%A7%D8%A8%D8%A7%D8%AA%D9%8F-%D8%A7%D9%84%D8%AF%D9%91%D9%8E%D9%85">اضطراباتُ الدَّم</Link>
            </li>
            <li>
              <Link to="https://www.msdmanuals.com/ar/home/%D8%A7%D8%B6%D8%B7%D8%B1%D8%A7%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D8%AF%D9%85%D8%A7%D8%BA-%D9%88%D8%A7%D9%84%D8%AD%D8%A8%D9%84-%D8%A7%D9%84%D8%B4%D9%88%D9%83%D9%8A-%D9%88%D8%A7%D9%84%D8%A3%D8%B9%D8%B5%D8%A7%D8%A8">اضطرابات الدماغ والحبل الشوكي والأعصاب</Link>
            </li>
            <li>
              <Link to="https://www.msdmanuals.com/ar/home/%D8%A7%D8%B6%D8%B7%D8%B1%D8%A7%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D8%B1%D8%A6%D8%A9-%D9%88%D8%A7%D9%84%D9%85%D8%AC%D8%B1%D9%89-%D8%A7%D9%84%D9%87%D9%88%D8%A7%D8%A6%D9%8A">اضطرابات الدماغ والحبل الشوكي والأعصاب</Link>
            </li>
            <li>
              <Link to="https://www.msdmanuals.com/ar/home/%D8%A7%D8%B6%D8%B7%D8%B1%D8%A7%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D8%B1%D8%A6%D8%A9-%D9%88%D8%A7%D9%84%D9%85%D8%AC%D8%B1%D9%89-%D8%A7%D9%84%D9%87%D9%88%D8%A7%D8%A6%D9%8A">اضطرابات الرئة والمجرى الهوائي</Link>
            </li>
            <li>
              <Link to="https://www.msdmanuals.com/ar/home/%D8%A7%D8%B6%D8%B7%D8%B1%D8%A7%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D8%B5%D8%AD%D9%91%D9%8E%D8%A9-%D8%A7%D9%84%D9%86%D9%81%D8%B3%D9%8A%D9%91%D9%8E%D8%A9">اضطرابات الصحَّة النفسيَّة</Link>
            </li>
            <li>
              <Link to="https://www.msdmanuals.com/ar/home/%D8%A7%D8%B6%D8%B7%D8%B1%D8%A7%D8%A8%D8%A7%D8%AA%D9%8F-%D8%A7%D9%84%D8%B9%D8%B8%D8%A7%D9%85-%D9%88%D8%A7%D9%84%D9%85%D9%8E%D9%81%D8%A7%D8%B5%D9%90%D9%84-%D9%88%D8%A7%D9%84%D8%B9%D8%B6%D9%84%D8%A7%D8%AA">اضطراباتُ العظام والمَفاصِل والعضلات</Link>
            </li>
            <li>
              <Link to="https://www.msdmanuals.com/ar/home/%D8%A7%D8%B6%D8%B7%D8%B1%D8%A7%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D8%B9%D9%8A%D9%86">اضطرابات العين</Link>
            </li>
            <li>
              <Link to="https://www.msdmanuals.com/ar/home/%D8%A7%D8%B6%D8%B7%D8%B1%D8%A7%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D9%81%D9%85-%D9%88%D8%A7%D9%84%D8%A3%D8%B3%D9%86%D8%A7%D9%86">اضطرابات الفم والأسنان</Link>
            </li>
            <li>
              <Link to="https://www.msdmanuals.com/ar/home/%D8%A7%D8%B6%D8%B7%D8%B1%D8%A7%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D9%82%D9%84%D8%A8-%D9%88%D8%A7%D9%84%D8%A3%D9%88%D8%B9%D9%90%D9%8A%D8%A9-%D8%A7%D9%84%D8%AF%D9%91%D9%8E%D9%85%D9%88%D9%8A%D9%91%D9%8E%D8%A9">اضطرابات القلب والأوعِية الدَّمويَّة</Link>
            </li>
            <li>
              <Link to="https://www.msdmanuals.com/ar/home/%D8%A7%D8%B6%D8%B7%D8%B1%D8%A7%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D9%83%D8%A8%D8%AF-%D9%88%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D8%B1%D8%A9">اضطرابات الكبد والمرارة</Link>
            </li>
            <li>
              <Link to="https://www.msdmanuals.com/ar/home/%D8%A7%D8%B6%D8%B7%D8%B1%D8%A7%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D9%83%D9%84%D9%8A%D8%A9-%D9%88%D8%A7%D9%84%D8%B3%D8%A8%D9%8A%D9%84-%D8%A7%D9%84%D8%A8%D9%88%D9%84%D9%8A">اضطرابات الكلية والسبيل البولي</Link>
            </li>
            <li>
              <Link to="https://www.msdmanuals.com/ar/home/%D8%A7%D9%84%D8%A3%D8%AF%D9%88%D9%8A%D8%A9">الأدوية</Link>
            </li>
            <li>
              <Link to="https://www.msdmanuals.com/ar/home/%D8%A7%D9%84%D8%A5%D8%B5%D8%A7%D8%A8%D8%A7%D8%AA-%D9%88%D8%A7%D9%84%D8%AA%D9%91%D9%8E%D8%B3%D9%85%D9%91%D9%8F%D9%85">الإصابات والتَّسمُّم</Link>
            </li>
            <li>
              <Link to="https://www.msdmanuals.com/ar/home/%D8%A7%D9%84%D8%A7%D8%B6%D8%B7%D8%B1%D8%A7%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D9%85%D9%86%D8%A7%D8%B9%D9%8A%D9%91%D9%8E%D8%A9">الاضطرابات المناعيَّة</Link>
            </li>
            <li>
              <Link to="https://www.msdmanuals.com/ar/home/%D8%A7%D9%84%D8%A7%D8%B6%D8%B7%D8%B1%D8%A7%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D9%87%D8%B1%D9%85%D9%88%D9%86%D9%8A%D8%A9-%D9%88%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%82%D9%84%D8%A7%D8%A8%D9%8A%D9%91%D9%8E%D8%A9">الاضطرابات الهرمونية والاستقلابيَّة</Link>
            </li>
            <li>
              <Link to="https://www.msdmanuals.com/ar/home/%D8%A7%D9%84%D8%A7%D8%B6%D8%B7%D8%B1%D8%A7%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D9%87%D8%B6%D9%85%D9%8A%D9%91%D9%8E%D8%A9">الاضطرابات الهضميَّة</Link>
            </li>
            <li>
              <Link to="https://www.msdmanuals.com/ar/home/%D8%A7%D9%84%D8%B3%D9%91%D9%8E%D8%B1%D8%B7%D8%A7%D9%86">السَّرطان</Link>
            </li>
            <li>
              <Link to="https://www.msdmanuals.com/ar/home/%D8%A7%D9%84%D9%85%D9%88%D8%B6%D9%88%D8%B9%D8%A7%D8%AA-%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D9%91%D9%8E%D8%A9">الموضوعات الخاصَّة</Link>
            </li>
            <li>
              <Link to="https://www.msdmanuals.com/ar/home/%D8%AD%D8%A7%D9%84%D8%A7%D8%AA-%D8%A7%D9%84%D8%B9%D9%8E%D8%AF%D9%88%D9%89">حالات العَدوى</Link>
            </li>
            <li>
              <Link to="https://www.msdmanuals.com/ar/home/%D9%82%D8%B6%D8%A7%D9%8A%D8%A7-%D8%B5%D8%AD%D9%91%D9%8E%D8%A9-%D8%A7%D9%84%D8%A3%D8%B7%D9%81%D8%A7%D9%84">قضايا صحَّة الأطفال</Link>
            </li>
            <li>
              <Link to="https://www.msdmanuals.com/ar/home/%D9%82%D8%B6%D8%A7%D9%8A%D8%A7-%D8%B5%D8%AD%D9%91%D9%8E%D8%A9-%D8%A7%D9%84%D8%B1%D8%AC%D8%A7%D9%84">قضايا صحَّة الرجال</Link>
            </li>
            <li>
              <Link to="https://www.msdmanuals.com/ar/home/%D9%82%D8%B6%D8%A7%D9%8A%D8%A7-%D8%B5%D8%AD%D9%91%D9%8E%D8%A9-%D8%A7%D9%84%D9%85%D8%B1%D8%A3%D8%A9">قضايا صحَّة المرأة</Link>
            </li>
            <li>
              <Link to="https://www.msdmanuals.com/ar/home/%D9%82%D8%B6%D8%A7%D9%8A%D8%A7-%D8%B5%D8%AD%D8%A9-%D9%83%D8%A8%D8%A7%D8%B1-%D8%A7%D9%84%D8%B3%D9%86">قضايا صحة كبار السن</Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default Subjects