import React, { useState } from 'react'
import './articles.css'
import { Container, Row, Col } from 'react-bootstrap'
import articleImg from '../../assets/new2.png'
import axios from 'axios'
const Articles = () => {
  const apiKey = '7c5a04e8728d45b699d6f29613e3e32a';
  const url = `https://newsapi.org/v2/top-headlines?country=eg&category=health&apiKey=${apiKey}`;
  const [data, setData] = useState([])
  fetch(url)
    .then(response => response.json())
    .then(data => {
      setData(data.articles);
    })
    .catch(error => {
      console.error(error);
    });
  return (
    <div className="Articles">
      <Container>
        {data.map(item => {
          const { url, title } = item;
          return (
            <div key={title}>
              <span>{title}</span>
              <a href={url}>Link</a>
            </div>
          )
        })}
        <h2 className='article__title'>ممارسة التمارين الرياضية لمرة واحدة في الشهر على الأقل يمكن أن يساعد مخك بعد عقود لاحقة</h2>
        <Row className="article__info">
          <Col lg={4} sm={12}>
            <div className="article__info-img">
              <img src={articleImg} alt="new-img" />
            </div>
          </Col>
          <Col lg={8} sm={12} className="article__info-description">
            <p>الأربعاء 1، آذار/مارس، 2023 (أخبار HealthDay) -- ممارسة التمارين الرياضية بانتظام في مرحلة ما من الحياة هي الأساس في الاستمتاع بصحة إدراكية أفضل في السن المتقدمة، حسبما قال الباحثون. البدء مبكرًا أفضل وكذلك الاستمرار في الممارسة لوقت أطول أفضل.</p>
            <p>كشفت دراسة بريطانية جديدة أن ممارسة التمارين الرياضية لمرة واحدة على الأقل في الشهر في أي وقت في مرحلة البلوغ ترتبط بالقدرة على التفكير وعمل الذاكرة بشكل أفضل في مرحلة لاحقة من الحياة.</p>
            <p>الأشخاص ممن أشاروا إلى ممارستهم للنشاط البدني مرة إلى أربع مرات على الأقل في الشهر في استبيانات مختلفة في سن الـ 36، و43، و53، و60، و64، و69 حظوا بأكبر فائدة.</p>
            <p>وكان الأثر أكبر لهؤلاء ممن أشاروا إلى أنهم مارسوا التمارين الرياضية بانتظام (أكثر من خمس مرات في الشهر) أثناء فترة واحدة من فترات الدراسة على الأقل ولكن لم يستمروا في ذلك بالضرورة عبر العديد من الاستبيانات.</p>
          </Col>
        </Row>
        <p className="article__details">
          “أشارت دراستنا إلى أن الانخراط في نشاط بدني في وقت الفراغ، في أي مرحلة من مراحل حياة البالغين، يعود بتأثير إيجابي على الإدراك. ويبدو أن هذا هو الحال حتى في وجود مستويات نشاط بسيطة، تتراوح من مرة إلى أربع مرات في الشهر” بحسب ما قالت سارة نعومي جيمس jمن وحدة MRC للصحة والشيخوخة مدى الحياة في كلية لندن الجامعية. “علاوة على ذلك، الأشخاص الذين لم يسبق لهم ممارسة النشاط البدني قط من قبل، وبدأوا في ممارسة النشاط البدني في الستينيات من أعمارهم، بدا وأنهم يحظون بوظيفة إدراكية أفضل مقارنة بهؤلاء ممن لمن يمارسوا النشاط البدني قط”.
          الأشخاص ممن مارسوا النشاط البدني طوال حياتهم يبدو أنهم أكثر المستفيدين على صعيد التفكير ووظائف الذاكرة.
          “إن التأثير متراكم، لذا كلما طالت الفترة التي يكون فيها الشخص نشيطًا بدنيًا، كلما كانت الوظيفة الإدراكية لديه أفضل في مرحلة لاحقة من الحياة” بحسب ما قالته جيمس في إصدار صحافي خاص بالجامعة.
          استخدم الباحثون البيانات المستمدة من قاعدة أبحاث بريطانية تشمل 1417 شخصًا ولدوا في نفس الأسبوع عام 1946 جرى تتبع حالتهم الصحية طوال حياتهم.
          أكمل المشاركون استبيانات حول النشاط البدني الذي مارسوه في أوقات فراغهم مثل العدو، والرقص، والبستنة، والسير لمسافات طويلة والرياضات التي مارسوها على مدار ثلاثة عقود.
          وخضعوا لاختبارات إدراكية في سن 69 بالإضافة إلى اختبار تحدى قدرتهم على تذكر أكبر كم من الكلمات من بين قائمة مكونة من 15 كلمة. في اختبار لسرعة المعالجة المرئية، تم سؤالهم عن عدد مرات ظهور حرف بعينه في صفحة تحتوي نصًا ما.
          توقع الباحثون معرفة ما إذا كانت ممارسة النشاط البدني خلال فترة معينة كانت الأهم على الإطلاق. وبدلاً من ذلك، استنتجوا أن البدء في ممارسة شكل ما من النشاط والاستمرار فيه على مدى فترة طويلة قد يكون أكثر أهمية مقارنة بتوقيت النشاط.
          الصلة الدقيقة بين التمارين الرياضية والوظيفة الإدراكية لا تزال غير واضحة.
          يمكن أن يفسر المستوى التعليمي، والإدراك في مرحلة الطفولة، والخلفية الاقتصادية الصلة الموجودة إلى حد ما، بحسب ما اكتشفه الباحثون. المشاركون ممن كانوا أكثر نشاطًا بدنيًا كان هم على الأرجح ممن تتردوا على الجامعات، وكان أولياء أمورهم من خلفيات أكثر تمتعًا بالامتيازات وكانت درجاتهم في الاختبارات أعلى وهم في سن الـ 8 أعوام.
          هناك قيد واحد للدراسة وهو أن كل المشاركين فيها من أصحاب البشرة البيضاء. هؤلاء ممن كانوا يعانون من صعوبات اجتماعية ومستوى صحي أقل كانوا على الأرجح يتركون الدراسة. تعد المتابعة طويلة الأمد نقطة قوة.
          نُشرت نتائج الدراسة في 21 شباط/فبراير في مجلة Journal of Neurology, Neurosurgery, and Psychiatry.
          مزيدٌ من المعلومات
          المعهد الوطني الأمريكي للشيخوخة لديه المزيد عن الصحة الإدراكية
          المصدر: جامعة كلية لندن، إصدار صحافي 21 شباط/فبراير 2023
        </p>
      </Container>
    </div>
  )
}

export default Articles