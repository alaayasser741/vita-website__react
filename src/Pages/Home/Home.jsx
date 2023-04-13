import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import main1 from '../../assets/main1.png'
import link1 from '../../assets/wrongLight.svg'
import link2 from '../../assets/calc.svg'
import link3 from '../../assets/courses.svg'
import video1 from '../../assets/vedio1.png';
import new1 from '../../assets/new1.png'
import { Link } from 'react-router-dom'
import { UilAngleLeft } from '@iconscout/react-unicons'
import home from './home.css';
import axios from 'axios'
const Home = () => {
  const [news, setNews] = useState([]);
  const key = '7c5a04e8728d45b699d6f29613e3e32a';
  const Url = `https://newsapi.org/v2/top-headlines?country=eg&category=health&apiKey=${key}`
  useEffect(() => {
    axios.get(Url).then((response) => {
      setNews(response.data.articles)
    }).catch(error => {
      console.log(error)
    })
  }, [])
  // Randomly select 5 news articles
  const selectedNews = [];
  while (selectedNews.length < 5 && news.length > 0) {
    const index = Math.floor(Math.random() * news.length);
    selectedNews.push(news[index]);
    news.splice(index, 1);
  }
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
              <UilAngleLeft className="link-icon" />
            </div>
            <div className="home__quick-Link">
              <div className="link__title">
                <img src={link2} alt="FristAid" />
                <Link to="/calculations">حاسبات طبية</Link>
              </div>
              <UilAngleLeft className="link-icon" />
            </div>
            <div className="home__quick-Link">
              <div className="link__title">
                <img src={link3} alt="FristAid" />
                <Link to="/courses">دورات تدريبية</Link>
              </div>
              <UilAngleLeft className="link-icon" />
            </div>
          </Col>
        </Row>
        <div className="home__video">
          <h3 className="home__video--title">فيديوهات مقترحة</h3>
          <div className="video__container">
            <a href="#">
              <div className="video__box">
                <img src={video1} alt="video-thumbnail" />
                <h4 className="vedio__title">تشريح العين</h4>
              </div>
            </a>
            <a href="#">
              <div className="video__box">
                <img src={video1} alt="video-thumbnail" />
                <h4 className="vedio__title">تشريح العين</h4>
              </div>
            </a>
          </div>
        </div>
        <div className="home__news">
          <h3 className="home__news--title">اخر الاخبار</h3>
          <div className="news__container">
            <img src={new1} className='new--img' alt="img-new" />
            <div className="news__contnet">
              {selectedNews.map(({ title, url, author }) => {
                return (<a key={title} target='_blank' href={url} className="new__info">
                  <h4>{title}</h4>
                  <span>{author}</span>
                </a>)
              })}
            </div>
          </div>
        </div>
      </Container>
    </div >
  )
}

export default Home