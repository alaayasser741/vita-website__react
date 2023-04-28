import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import calcImg from '../../assets/viewImg.png'
import { UilFacebookF, UilTwitter, UilTimes } from '@iconscout/react-unicons'
import './viewcalc.css';
import articleImg from '../../assets/article.png'
import sliderCalc from '../../assets/Silderclac.png'

const ViewCalc = ({ setShowForm, showTypeForm }) => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [bmr, setBMR] = useState('');
  const [Ibw, setIBW] = useState('');
  const [Bmi, setBMI] = useState('');


  // BMR
  const calcBMR = (e) => {
    e.preventDefault();
    let bmr;

    if (gender === 'male') {
      bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
      bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
    setBMR(bmr.toFixed(2));
  }

  // IBW
  const calculateIBW = (e) => {
    e.preventDefault();
    const heightInM = height / 100;
    let ibwInKgs = 0;

    if (gender === 'male') {
      ibwInKgs = 22 * (heightInM ** 2);
    } else {
      let heightInCm = heightInM - .1;
      ibwInKgs = 22 * (heightInCm ** 2);
    }

    setIBW(ibwInKgs.toFixed(2));
  }

  const calcBMI = (e) => {
    e.preventDefault();
    const weightInKg = (weight);
    const heightInM = (height / 100);
    let BmiKgs = 0;
    let BmiDetails = '';
    BmiKgs = weight / (heightInM ** 2);
    if (BmiKgs < 18.5) {
      BmiDetails = `${BmiKgs.toFixed(2)} نقص في الوزن`
    } else if (BmiKgs < 24.9) {
      BmiDetails = `${BmiKgs.toFixed(2)} الوزن الطبيعي`
    } else if (BmiKgs < 29.9) {
      BmiDetails = `${BmiKgs.toFixed(2)} زيادة الوزن`
    } else if (BmiKgs > 30) {
      BmiDetails = `${BmiKgs.toFixed(2)} بدين`
    }
    setBMI(BmiDetails)
  }
  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(window.location.href)} ${(showTypeForm === '0') ? `My BMI is ${Bmi} !` : (showTypeForm === '1') ? `My BMR is ${bmr} calories per day!` : (showTypeForm === '3') ? `My IBW is ${Ibw} !` : ''}  😀🖤`;
    window.open(url, '_blank');
  };

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(` ${(showTypeForm === '0') ? `My Bmi is ${Bmi} ` : (showTypeForm === '1') ? `My BMR is ${bmr} calories per day!` : (showTypeForm === '2') ? `My IBW is ${Ibw} ` : ''}  😀🖤`)}`;
    window.open(url, '_blank');
  };
  return (
    <div className="viewCalc">
      <Container>
        <UilTimes size="2rem" className="close-Btn" onClick={() => setShowForm(false)} />
        <h2 className="view__title">{(showTypeForm === '0') ? "مؤشر كتلة الجسم - BMI" : (showTypeForm === '1') ? "حاسبة مؤشر كتلة الجسم - BMR" : (showTypeForm === '2') ? "وزن الجسم المثالي بموجب الطول - IBW" : (showTypeForm === '3') ? 'معدل نبضات القلب المستهدف - THR' : (showTypeForm === '4') ? 'حاسبة التبويض' : (showTypeForm === '5') ? 'حاسبة مراحل الحمل' : (showTypeForm === '6') ? 'حاسبة تطور الجنين' : 'حاسبة موعد الولادة'}</h2>
        <span className="view__subtitle">{(showTypeForm === '0') ? "قياس يستخدم لتقييم وزن الشخص بالنسبة لطوله" : (showTypeForm === '1') ? "قياس نسبة السعرات الحرارية في الجسم" : (showTypeForm === '2') ? "قياس لمعرفة الوزن المثالي بموجب الطول" : (showTypeForm === '3') ? 'قياس لمعرفة معدل نبضات القلب الملائم للياقة القلب والرئتين وحرق الدهون' : (showTypeForm === '4') ? 'مساعدة على معرفة الايام اللتي تكون فيها درجة الاخصاب عالية' : (showTypeForm === '5') ? 'حاسبة لمواعيد مراحل الحمل المختلفة' : (showTypeForm === '6') ? 'حاسبة لمراحل نمو الجنين والتغييرات اللتي تطرأ على الجنين والمرأة الحامل' : 'حاسبة لموعد الولادة المتوقع'}</span>
        <p hidden={showTypeForm === "1" && '2' && '3' && '4'} className='not-Ready'>غير متوفرة في الاصدار الحالي</p>
        <Row hidden={showTypeForm != "1" && '2' && '3' && '4'}>
          <Col xs={12} md={6} lg={8} className="view__calculator">
            <div className="view__img">
              <img src={calcImg} alt="Calc-Img" />
            </div>
            <div><p className="calc__description">{(showTypeForm === '0') ? "حاسبة ال- BMI هي اداة لتحديد اذا كان وزنك في معدله الطبيعي، زائد عن معدله الطبيعي او اقل من معدله الطبيعي. من الجدير بالذكر ان هذه الحاسبة غير ملائمة للاطفال والنساء الحوامل" : (showTypeForm === '1') ? "هي اداة لتحديد نسبة السعرات الحرارية في الجسم بناءا علي الوزن والطول والعمر والجنس" : (showTypeForm === '2') ? "هي اداة لقياس الوزن المثالي للجسم بناءا علي الطول" : (showTypeForm === '3') ? '' : (showTypeForm === '4') ? 'هي اداة للمساعدة علي معرفة الايام التي تكون فيها درجة الاخصاب عالية' : (showTypeForm === '5') ? 'هي اداة لقياس مواعيد الحمل المختلفة' : (showTypeForm === '6') ? 'هي اداة لقياس مراحل نمو الجنين والتغيرات التي تطرأ علي الجنين والمرأة الحامل' : 'هي اداة لقياس الموعد المتوقع للولادة'}</p>
              <p hidden={showTypeForm != '3'} className='descripition__content'>يتراوح معدل ضربات القلب أثناء الراحة للبالغين بين 60 و100 ضربة في الدقيقة.

                بصفة عامة، فإن انخفاض معدل ضربات القلب أثناء الراحة يشير إلى كفاءة أكبر لوظيفة القلب وصحة أفضل للقلب والأوعية. على سبيل المثال، قد يصل معدل ضربات القلب الطبيعي أثناء الراحة لدى رياضي جيد التدريب إلى حوالي 40 ضربة في الدقيقة.

                لقياس معدل ضربات القلب لديك، ما عليك سوى قياس نبضك. ضع إصبعي السبابة والوسطى على رقبتك إلى جوار القصبة الهوائية. لفحص نبضك عند رسغك، ضع إصبعين بين العظم والوتر فوق الشريان الكعبري — الذي يقع في رسغك في ناحية الإبهام.

                وعندما تشعر بالنبض، احسب عدد النبضات في 15 ثانية. اضرب العدد الناتج في أربعة لحساب معدل ضربات قلبك في الدقيقة.</p>
              <span hidden={showTypeForm != '3'}>تذكر أن ثمة عوامل عديدة قد تؤثر في معدل ضربات القلب، بما فيها:</span>
              <ul hidden={showTypeForm != '3'} className='HTR__list'>
                <li>العمر</li>
                <li>اللياقة ومستويات النشاط</li>
                <li>كونك مدخنًا</li>
                <li>الإصابة بمرض القلب والأوعية الدموية أو ارتفاع الكوليستيرول أو داء السكري</li>
                <li>درجة حرارة الهواء</li>
                <li>وضعية الجسم (على سبيل المثال، أثناء الوقوف أم الاستلقاء)</li>
                <li>الانفعالات</li>
                <li>حجم الجسم</li>
                <li>الأدوية</li>
              </ul>
              <p className="calc__description" hidden={showTypeForm != '3'}>على الرغم من وجود نطاق واسع لمعدل ضربات القلب الطبيعي، فإن ارتفاع معدل ضربات القلب أو انخفاضه بشكل غير طبيعي قد يشير إلى وجود مشكلة كامنة. استشر الطبيب إذا كان معدل ضربات القلب أثناء الراحة أعلى من 100 ضربة في الدقيقة بشكل مستمر (تسرّع القلب) أو إذا لم تكن رياضيًا مدربًا وكان معدل ضربات قلبك أقل من 60 ضربة في الدقيقة (بطء القلب) — وخاصةً إذا كانت لديك علامات أو أعراض أخرى، مثل الإغماء أو الدوار أو ضيق التنفس.</p>
            </div>
            <form className='BMR__form'>
              <input type="number" className='no-spinners' hidden={showTypeForm === '3'} value={height} placeholder='الطول (سم)' onChange={(e) => setHeight(e.target.value)} />
              <input type="number" className='no-spinners' hidden={showTypeForm === "2" && '3'} value={weight} placeholder='الوزن (كجم)' onChange={(e) => setWeight(e.target.value)} />
              <input type="number" className='no-spinners' hidden={showTypeForm === "2" && '0' && '3'} value={age} placeholder='العمر' onChange={(e) => setAge(e.target.value)} />
              <div className="calc__gender" hidden={showTypeForm === '0' && '3'} >
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
              <button hidden={showTypeForm === '3'} className='BMR_button' onClick={(showTypeForm === '0') ? calcBMI : (showTypeForm === '1') ? calcBMR : (showTypeForm === '2') ? calculateIBW : ''}>{(showTypeForm === '0') ? 'احسب BMI' : (showTypeForm === '1') ? 'احسب BMR' : (showTypeForm === '2') ? 'احسب IBW' : (showTypeForm === '3') ? 'احسب THR' : (showTypeForm === '4') ? '' : ''}</button>
              <input hidden={showTypeForm === '3'} type="text" placeholder='النتيجة' value={(showTypeForm === '0') ? Bmi : (showTypeForm === '1') ? bmr : (showTypeForm === '2') ? Ibw : ''} className='BMR_value' readOnly />
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