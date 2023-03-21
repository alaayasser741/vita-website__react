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
                <Link to="/">اساسيات</Link>
              </li>
              <li>
                <Link to="/">اضطرابات الأذن والأنف والحنجرة</Link>
              </li>
              <li>
                <Link to="/">اضطرابات التغذية</Link>
              </li>
              <li>
                <Link to="/">اضطراباتُ الدَّم</Link>
              </li>
              <li>
                <Link to="/">اضطرابات الدماغ والحبل الشوكي والأعصاب</Link>
              </li>
              <li>
                <Link to="/">اضطرابات الدماغ والحبل الشوكي والأعصاب</Link>
              </li>
              <li>
                <Link to="/">اضطرابات الرئة والمجرى الهوائي</Link>
              </li>
              <li>
                <Link to="/">اضطرابات الصحَّة النفسيَّة</Link>
              </li>
              <li>
                <Link to="/">اضطراباتُ العظام والمَفاصِل والعضلات</Link>
              </li>
              <li>
                <Link to="/">اضطرابات العين</Link>
              </li>
              <li>
                <Link to="/">اضطرابات الفم والأسنان</Link>
              </li>
              <li>
                <Link to="/">اضطرابات القلب والأوعِية الدَّمويَّة</Link>
              </li>
              <li>
                <Link to="/">اضطرابات القلب والأوعِية الدَّمويَّة</Link>
              </li>
              <li>
                <Link to="/">اضطرابات الكبد والمرارة</Link>
              </li>
              <li>
                <Link to="/">اضطرابات الكلية والسبيل البولي</Link>
              </li>
              <li>
                <Link to="/">الأدوية</Link>
              </li>
              <li>
                <Link to="/">الإصابات والتَّسمُّم</Link>
              </li>
              <li>
                <Link to="/">الاضطرابات المناعيَّة</Link>
              </li>
              <li>
                <Link to="/">الاضطرابات الهرمونية والاستقلابيَّة</Link>
              </li>
              <li>
                <Link to="/">الاضطرابات الهرمونية والاستقلابيَّة</Link>
              </li>
              <li>
                <Link to="/">الاضطرابات الهضميَّة</Link>
              </li>
              <li>
                <Link to="/">السَّرطان</Link>
              </li>
              <li>
                <Link to="/">الموضوعات الخاصَّة</Link>
              </li>
              <li>
                <Link to="/">حالات العَدوى</Link>
              </li>
              <li>
                <Link to="/">قضايا صحَّة الأطفال</Link>
              </li>
              <li>
                <Link to="/">قضايا صحَّة الرجال</Link>
              </li>
              <li>
                <Link to="/">قضايا صحَّة المرأة</Link>
              </li>
              <li>
                <Link to="/">قضايا صحة كبار السن</Link>
              </li>
            </ul>
        </div>
      </Container>
    </div>
  )
}

export default Subjects