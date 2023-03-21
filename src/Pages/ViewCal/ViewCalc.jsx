import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import calcImg from '../../assets/viewImg.png'
import { UilFacebookF, UilTwitter } from '@iconscout/react-unicons'
import './viewcalc.css';
import articleImg from '../../assets/article.png'
import sliderCalc from '../../assets/Silderclac.png'

const ViewCalc = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [bmr, setBMR] = useState('');
  const calcBMR = (e) => {
    e.preventDefault();
    const weightInKg = parseFloat(weight);
    const heightInCm = parseFloat(height);
    const ageInYears = parseFloat(age);
    let bmr;
    if (gender === 'male') {
      bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * ageInYears + 5;
    } else {
      bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * ageInYears - 161;
    }
    setBMR(bmr.toFixed(2));
  }
  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(window.location.href)} My Bmr is ${bmr} calories per day! 😀🖤`;
    window.open(url, '_blank');
  };

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(`My BMR is ${bmr} calories per day! 😀🖤`)}`;
    window.open(url, '_blank');
  };
  return (
    <div className="viewCalc">
      <Container>
        <h2 className="view__title">حاسبة مؤشر كتلة الجسم - BMI</h2>
        <span className="view__subtitle">قياس يستخدم لتقييم وزن الشخص بالنسبة لطوله</span>
        <Row>
          <Col xs={12} md={6} lg={8} className="view__calculator">
            <div className="view__img">
              <img src={calcImg} alt="Calc-Img" />
            </div>
            <p className="calc__description">حاسبة ال- BMI هي اداة لتحديد اذا كان وزنك في معدله الطبيعي، زائد عن معدله الطبيعي او اقل من معدله الطبيعي. من الجدير بالذكر ان هذه الحاسبة غير ملائمة للاطفال والنساء الحوامل</p>
            <form className='BMR__form'>
              <input type="number" className='no-spinners' value={height} placeholder='الطول (سم)' onChange={(e) => setHeight(e.target.value)} />
              <input type="number" className='no-spinners' value={weight} placeholder='الوزن (كجم)' onChange={(e) => setWeight(e.target.value)} />
              <input type="number" className='no-spinners' value={age} placeholder='العمر' onChange={(e) => setAge(e.target.value)} />
              <div className="calc__gender">
                <label className='gender__title'>الجنس:</label>
                <div className="gender__male">
                  <label htmlFor="male" onClick={(e) => setGender("male")}>ذكر</label>
                  <input type="radio" name="gender" onClick={(e) => setGender("male")} id='male' value="male" />
                </div>
                <div className="gender__female">
                  <label htmlFor="female" onClick={(e) => setGender("female")}>انثي</label>
                  <input type="radio" name="gender" onClick={(e) => setGender("female")} id='female' value="female" />
                </div>
              </div>
              <button className='BMR_button' onClick={calcBMR}>احسب BMR</button>
              <input type="text" placeholder='النتيجة' value={bmr} className='BMR_value' readOnly />
            </form>
            <div className="BMR__share">
              <h4>شارك</h4>
              <div className="BMR__share-icon">
                <a href="#" onClick={shareOnFacebook}><UilFacebookF /></a>
                <a href="#" onClick={shareOnTwitter}><UilTwitter /></a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4} className="view__slider">
            <h3 className="slider__title">جديد فيتا حياة</h3>
            <div className="new__articles">
              <div className="article__box">
                <div className="article__img">
                  <img src={articleImg} alt="article__img" />
                </div>
                <div className="article__info">
                  <h4>تطور الحواس لدى الجنين في الرحم</h4>
                  <p>يعتقد الكثيرون ان الاطفال حديثي الولاده , يولدون مع حواس غير</p>
                  <a href="#">قراءة المزيد</a>
                </div>
              </div>
              <div className="article__box">
                <div className="article__img">
                  <img src={articleImg} alt="article__img" />
                </div>
                <div className="article__info">
                  <h4>تطور الحواس لدى الجنين في الرحم</h4>
                  <p>يعتقد الكثيرون ان الاطفال حديثي الولاده , يولدون مع حواس غير</p>
                  <a href="#">قراءة المزيد</a>
                </div>
              </div>
              <div className="article__box">
                <div className="article__img">
                  <img src={articleImg} alt="article__img" />
                </div>
                <div className="article__info">
                  <h4>تطور الحواس لدى الجنين في الرحم</h4>
                  <p>يعتقد الكثيرون ان الاطفال حديثي الولاده , يولدون مع حواس غير</p>
                  <a href="#">قراءة المزيد</a>
                </div>
              </div>
              <div className="article__box">
                <div className="article__img">
                  <img src={articleImg} alt="article__img" />
                </div>
                <div className="article__info">
                  <h4>تطور الحواس لدى الجنين في الرحم</h4>
                  <p>يعتقد الكثيرون ان الاطفال حديثي الولاده , يولدون مع حواس غير</p>
                  <a href="#">قراءة المزيد</a>
                </div>
              </div>
            </div>
            <div className="slider__calc">
              <h3>حاسبات طبية</h3>
              <div className="calc__box">
                <img src={sliderCalc} alt="icon" />
                <a href="#">حاسبة التبويض</a>
              </div>
              <div className="calc__box">
                <img src={sliderCalc} alt="icon" />
                <a href="#">حاسبة التبويض</a>
              </div>
              <div className="calc__box">
                <img src={sliderCalc} alt="icon" />
                <a href="#">حاسبة التبويض</a>
              </div>
              <div className="calc__box">
                <img src={sliderCalc} alt="icon" />
                <a href="#">حاسبة التبويض</a>
              </div>
              
            </div>
            
            <div className="slider__qestion">
              <h3>أكثر الأسئلة بحثاً</h3>
              <ul className="quest__Links">
                <li><a href="#">ما هي أعراض التهاب الأذن الوسطى؟</a></li>
                <li><a href="#">ما هو علاج تورم العين؟</a></li>
                <li><a href="#">ما هي عوامل خطورة سرطان الرئة؟</a></li>
                <li><a href="#">ما هو علاج التهاب الأذن الوسط؟</a></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ViewCalc