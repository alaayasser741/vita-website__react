import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import main1 from '../../assets/main1.png'
import link1 from '../../assets/wrongLight.svg'
import link2 from '../../assets/calc.svg'
import link3 from '../../assets/courses.svg'


import { Link } from 'react-router-dom'
import { UilAngleLeft } from '@iconscout/react-unicons'
import home from './home.css'
const Home = () => {
  return (
    <div className='home'>
      <Container>
        <h2 className="home__title">محتويات مميزة</h2>
        <Row className='main__content'>
          <Col xs={12} md={7} lg={9}>
            <div className='home__content'>
              <Row className="home__slider">
                <Col lg={6} className="slider__img">
                  <img src={main1} alt="slider" />
                </Col>
                <Col lg={6}>
                  <Carousel variant="dark">
                    <Carousel.Item>
                      <Carousel.Caption>
                        <h3 className="slider-title">الحساسية الموسمية : اعراضها ومحفزتها وطرق علاجها</h3>
                        <p className="slider-subtitle">
                          تحدث الحساسية الموسمية نتيجة التعرض لبعض المواد الموجودة في الجو والتي تظهر فقط خلال أوقات معينة من العام، والحساسية الموسمية أو ما تُعرف باسمها الشائع حساسية القش وتحدث خلال أوقات معينة من العام، خاصة في الربيع أو الصيف أو الخريف، وفقاً للمواد...
                        </p>
                      </Carousel.Caption>
                      <a href="#" className="slider--read-more">قراءة الكل</a>
                    </Carousel.Item>
                    <Carousel.Item>
                      <Carousel.Caption>
                        <h3 className="slider-title">الحساسية الموسمية : اعراضها ومحفزتها وطرق علاجها</h3>
                        <p className="slider-subtitle">
                          تحدث الحساسية الموسمية نتيجة التعرض لبعض المواد الموجودة في الجو والتي تظهر فقط خلال أوقات معينة من العام، والحساسية الموسمية أو ما تُعرف باسمها الشائع حساسية القش وتحدث خلال أوقات معينة من العام، خاصة في الربيع أو الصيف أو الخريف، وفقاً للمواد...
                        </p>
                      </Carousel.Caption>
                      <a href="#" className="slider--read-more">قراءة الكل</a>
                    </Carousel.Item>
                    <Carousel.Item>
                      <Carousel.Caption>
                        <h3 className="slider-title">الحساسية الموسمية : اعراضها ومحفزتها وطرق علاجها</h3>
                        <p className="slider-subtitle">
                          تحدث الحساسية الموسمية نتيجة التعرض لبعض المواد الموجودة في الجو والتي تظهر فقط خلال أوقات معينة من العام، والحساسية الموسمية أو ما تُعرف باسمها الشائع حساسية القش وتحدث خلال أوقات معينة من العام، خاصة في الربيع أو الصيف أو الخريف، وفقاً للمواد...
                        </p>
                      </Carousel.Caption>
                      <a href="#" className="slider--read-more">قراءة الكل</a>
                    </Carousel.Item>
                  </Carousel>
                </Col>
              </Row>
            </div>
          </Col>
          <Col className='home__quickLinks' xs={12} md={5} lg={3}>
            <h3>روابط سريعة</h3>
            <div className="home__quick-Link">
              <div className="link__title">
                <img src={link1} alt="FristAid" />
                <Link to="/firstAid">الاسعافات الاولية</Link>
              </div>
              <UilAngleLeft className="link-icon"/>
            </div>
            <div className="home__quick-Link">
              <div className="link__title">
                <img src={link2} alt="FristAid" />
                <Link to="/calculations">حاسبات طبية</Link>
              </div>
              <UilAngleLeft className="link-icon"/>
            </div>
            <div className="home__quick-Link">
              <div className="link__title">
                <img src={link3} alt="FristAid" />
                <Link to="/courses">دورات تدريبية</Link>
              </div>
              <UilAngleLeft className="link-icon"/>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  )
}

export default Home