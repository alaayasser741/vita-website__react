import React, { useState } from 'react'
import './calculations.css'
import { Container } from 'react-bootstrap'
import CalculationImg from '../../assets/calculation.png';
import calc1 from '../../assets/calc-1.png';
import calc2 from '../../assets/calc-2.png';
import calc3 from '../../assets/calc-3.png';
import calc4 from '../../assets/calc-4.png';
import calc5 from '../../assets/calc-5.png';
import calc6 from '../../assets/calc-6.png';
import calc7 from '../../assets/calc-7.png';
import ViewCalc from '../ViewCal/ViewCalc'

const Calculations = () => {
  const [showCalcPage, setShowCalcPage] = useState(false);
  const [showTypeForm, setShowTypeForm] = useState('1');


  return (
    <div className="calculation">
      <Container>
        <div className="calculation__image">
          <img src={CalculationImg} alt="Header-image" />
          <h3 className="calculation__header--title">حاسبات طبية</h3>
        </div>
        <div className="calculation__content">
          <div className="calculation__box">
            <img src={calc1} alt="calc-icon" />
            <div className="calculation__box-info">
              <h5 onClick={() => {
                setShowCalcPage(true);
                setShowTypeForm('1')
                
              }} >حاسبة السعرات الحرارية - BMR</h5>
              <span>قياس يستخدم لتقييم وزن الشخص بالنسبة لطوله</span>
            </div>

          </div>

          <div className="calculation__box">
            <img src={calc2} alt="calc-icon" />
            <div className="calculation__box-info">
              <h5 onClick={() => {
                setShowCalcPage(true);
                setShowTypeForm('2')
                
              }}>وزن الجسم المثالي بموجب الطول - IBW</h5>
              <span>قياس لمعرفة الوزن المثالي بموجب الطول</span>
            </div>

          </div>

          <div className="calculation__box">
            <img src={calc1} alt="calc-icon" />
            <div className="calculation__box-info">
              <h5 onClick={() => {
                setShowCalcPage(true);
                setShowTypeForm('0');
              }} >مؤشر كتلة الجسم - BMI</h5>
              <span>قياس يستخدم لتقييم وزن الشخص بالنسبة لطوله</span>
            </div>

          </div>
          <div className="calculation__box">
            <img src={calc3} alt="calc-icon" />
            <div className="calculation__box-info">
              <h5 onClick={() => {
                setShowCalcPage(true);
                setShowTypeForm('3');
              }}>معدل نبضات القلب المستهدف - THR</h5>
              <span>قياس لمعرفة معدل نبضات القلب الملائم للياقة القلب والرئتين وحرق الدهون</span>
            </div>

          </div>

          <div className="calculation__box">
            <img src={calc4} alt="calc-icon" />
            <div className="calculation__box-info">
              <h5 onClick={() => {
                setShowCalcPage(true);
                setShowTypeForm('4')
              }}>حاسبة التبويض</h5>
              <span>مساعدة على معرفة الايام اللتي تكون فيها درجة الاخصاب عالية</span>
            </div>

          </div>

          <div className="calculation__box">
            <img src={calc5} alt="calc-icon" />
            <div className="calculation__box-info">
              <h5 onClick={() => {
                setShowCalcPage(true);
                setShowTypeForm('5')
              }}>حاسبة مراحل الحمل</h5>
              <span>حاسبة لمواعيد مراحل الحمل المختلفة</span>
            </div>

          </div>

          <div className="calculation__box">
            <img src={calc6} alt="calc-icon" />
            <div className="calculation__box-info">
              <h5 onClick={() => {
                setShowCalcPage(true);
                setShowTypeForm('6')
              }}>حاسبة تطور الجنين</h5>
              <span>حاسبة لمراحل نمو الجنين والتغييرات اللتي تطرأ على الجنين والمرأة الحامل</span>
            </div>

          </div>

          <div className="calculation__box">
            <img src={calc7} alt="calc-icon" />
            <div className="calculation__box-info">
              <h5 onClick={() => {
                setShowCalcPage(true);
                setShowTypeForm('7')
              }}>حاسبة موعد الولادة</h5>
              <span>حاسبة لموعد الولادة المتوقع</span>
            </div>

          </div>
        </div>
      </Container>
      {showCalcPage === false ? '' : <ViewCalc showForm={showCalcPage} setShowForm={setShowCalcPage} showTypeForm={showTypeForm} />}
    </div>
  )
}

export default Calculations