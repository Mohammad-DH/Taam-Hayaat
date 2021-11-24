import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import Tilt from "react-parallax-tilt";
import { root } from "../../context/API";

function SlidePage() {
  const { cats, lan } = useContext(root);
  const [last, setlast] = useState(0);
  const [number, setnumber] = useState(0);

  useEffect(() => {
    if (cats) {
      if (number - last === 1 || number - last === (cats.length - 1) * -1) {
        NextAnimation(number);
      } else if (number - last < 0 || number - last === cats.length) {
        PreAnimation(number);
      }
      setlast(number);
    }
  }, [number]);

  const next = () => {
    if (cats.length === number + 1) {
      setnumber(cats.length - 1);
    } else {
      setnumber(number + 1);
    }
  };
  const pre = () => {
    if (0 === number) {
      setnumber(0);
    } else {
      setnumber(number - 1);
    }
  };

  const NextAnimation = (target) => {
    gsap.to(`.card_${target}`, { duration: 1, translateX: "-100vw" });
    gsap.to(`.card_${target + 1}`, { duration: 1, translateX: 0 });
  };
  const PreAnimation = (target) => {
    if (target === 0) {
      gsap.to(`.card_${target + 2}`, { duration: 1, translateX: "100vw" });
      gsap.to(`.card_${target + 1}`, { duration: 1, translateX: "0vw" });
    } else {
      gsap.to(`.card_${target + 2}`, { duration: 1, translateX: "100vw" });
      gsap.to(`.card_${target + 1}`, { duration: 1, translateX: "0vw" });
    }
  };

  return (
    <div className="SlidePage">
      {cats ? (
        <>
          <img
            src="./arrow.svg"
            className={number === cats.length - 1 ? "next dis" : "next"}
            onClick={next}
            alt="next"
          />
          <img
            src="./arrow.svg"
            className={number === 0 ? "pre dis" : "pre"}
            onClick={pre}
            alt="pre"
          />
        </>
      ) : (
        ""
      )}
      <Tilt
        className="parallax-effect-glare-scale"
        reset={false}
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.45}
        scale={1.02}
        tiltMaxAngleX={1}
        tiltMaxAngleY={1}
        glarePosition="all"
      >
        <div className="sliderBox">
          <div className="slider">
            {cats
              ? cats.map((e, index) => {
                  return (
                    <div className={`card card_${index + 1}`}>
                      <img
                        className="card-image"
                        src={e.categoryicon.icon}
                        alt=""
                      />
                    </div>
                  );
                })
              : ""}
          </div>
          <div className="slider-info">
            <img className="border border-r" src="./border.png" alt="" />
            <img className="border border-l" src="./border.png" alt="" />
            {cats ? (
              <h3 className="info-title">
                {lan === "AR" ? cats[number].label_ar : cats[number].label}
              </h3>
            ) : (
              ""
            )}
            <Link
              to={cats ? `/shop/${cats[number].id}` : ""}
              className="info-btn"
            >
              {lan === "AR" ? "اظهار الكل" : "see all"}
            </Link>
          </div>
        </div>
      </Tilt>

      <style jsx>{`
        .SlidePage {
          position: relative;
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sliderBox {
          position: relative;
          width: 88vw;
          height: 90vh;
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          justify-content: space-between;
          border: 2px solid white;
          border-radius: 3px;
        }
        .slider {
          position: relative;
          width: 40%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .card {
          position: absolute;
          width: 95%;
          height: 95%;
          border: 2px solid white;
          background-color: rgba(255, 255, 255, 0.3);
          transform: translateX(100vw);
          border-radius: 1rem;
          overflow: hidden;
        }
        .card-image {
          width: 100%;
          height: 100%;
        }
        .card_1 {
          transform: translateX(0vw);
        }
        .next,
        .pre {
          position: absolute;
          top: 50%;
          z-index: 50;
          width: 40px;
          background-color: rgba(255, 235, 205, 0.4);
          border-radius: 500px;
          padding: 0.5rem;
          transition: all 0.2s linear;
          cursor: pointer;
        }
        .next:hover,
        .pre:hover {
          background-color: rgba(255, 235, 205, 0.9);
        }
        .next {
          right: 2%;
          transform: rotate(180deg);
        }

        .pre {
          left: 1%;
        }
        .dis {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .slider-info {
          position: relative;
          width: 59%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .info-title {
          width: fit-content;
          font-size: 8rem;
          text-transform: capitalize;
        }
        .info-btn {
          position: absolute;
          bottom: 5%;
          font-size: 1.8rem;
          padding: 1rem 2rem;
          border: 2px solid black;
          border-radius: 1rem;
          cursor: pointer;
          z-index: 900;
          transition: all 0.2s linear;
          text-decoration: none;
          color: black;
        }
        .info-btn:hover {
          background-color: rgba(255, 255, 255, 0.4);
          transform: scale(1.05);
        }
        .border {
          position: absolute;
          width: 200px;
        }
        .border-r {
          right: 0%;
          top: 0%;
        }
        .border-l {
          bottom: 0%;
          left: 0%;
          transform: rotate(180deg);
        }
        @media only screen and (max-width: 600px) {
          .slider {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            filter: blur(2px);
          }
          .slider-info {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.3);
          }
          .info-title {
            font-size: 15vw;
          }
          .info-btn {
            bottom: 15%;
            font-size: 7vw;
            background-color: rgba(255, 255, 255, 0.3);
          }
          .next,
          .pre {
            top: 65%;

            width: 40px;
            background-color: rgba(255, 235, 205, 0.7);
            border: 1px solid rgba(255, 235, 205, 1);
            padding: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}

export default SlidePage;
