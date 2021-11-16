import React from "react";

function About() {
  return (
    <div className="about">
      <div className="about-image-box">
        <img className="about-image-frame" src="./frame.png" alt="" />
        <img className="about-image" src="./persone.jpg" alt="" />
      </div>
      <div className="about-text">
        <img className="about-div top-div" src="div.png" alt="" />
        <p>
          التي وصغار واستمر لان ما, و الثالث اليابانية أخذ, زهاء بقعة السادس من
          الى. في دول مساعدة النزاع, فقد عُقر عملية طوكيو عل. ثم اللا انذار
          الإقتصادي فقد, الهادي تكاليف دول و. ذات معارضة الأبرياء في, أي جيوب
          والحزب قام. به، تحرير الشطر تم, هُزم وقامت وهولندا، أخذ كل. الإنزال
          إستيلاء المتاخمة حدى هو, لها زهاء فبعد بـ. قد دول إعلان الشرقي. بين
          دخول بالحرب ثم. بحث ما أملاً اقتصادية. كان دأبوا الحكم إذ. لمّ هاربر
          أوروبا أم, إجلاء بمعارضة ما ولم, حصدت ألمانيا جهة أم. ومضى كثيرة
          المتّبعة أم أسر. فرنسية الخطّة استراليا، ثم دون, استدعى الثانية وقد
          أن, بـ مساعدة الجنوب وقدّموا قام. بـ نقطة الإمداد الدولارات ومن, وزارة
          إيطاليا لمّ مع. إذ به، شعار السيء الشرقية, فعل هو تسمّى الأرض العالم,
          كانت وبلجيكا، التبرعات قبل كل. وقد ٣٠ بمحاولة والنفيس, أن جُل اسبوعين
          الشتاء،. بل ضرب والتي ويتّفق, ان عدم عجّل أوسع واُسدل. بفرض مشروط
          اتّجة بـ حدى. مارد يتعلّق لإنعدام عن جعل.
        </p>
        <img className="about-div bot-div" src="div.png" alt="" />
      </div>

      <style jsx>{`
        .about {
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
        }
        .about-image-box {
          position: relative;
          height: 100%;
          width: 35%;
        }
        .about-image {
          height: 100%;
          width: 100%;
        }
        .about-image-frame {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 20;
        }
        .about-text {
          height: 100%;
          width: 65%;
          background-color: rgba(255, 252, 212, 0.8);
          font-size: 1.6rem;
          text-align: right;
          line-height: 170%;
          overflow-y: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
        }
        .about-div {
          width: 50%;
        }
        .bot-div {
          transform: rotate(180deg);
        }
        .about-text p {
          padding: 0.5rem 2.5rem;
        }
        @media only screen and (max-width: 600px) {
          .about-image-box {
            display: none;
          }
          .about-text {
            height: 100%;
            width: 100%;
            font-size: 1.2rem;
            text-align: center;
            overflow: hidden;
          }
          .about-text p {
            height: 90%;
            width: 90%;
            overflow-y: scroll;
            overflow-x: hidden;
          }
        }
      `}</style>
    </div>
  );
}

export default About;
