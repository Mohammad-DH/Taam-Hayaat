import React, { useEffect } from "react";
import Certification from "./components/sec1/Certification";
import gsap from "gsap";

function Sec1() {
  useEffect(() => {
    let tl = gsap.timeline();
    tl.to(".logo", { duration: 1, top: "20%" });
    tl.to(".logo", {
      delay: 1,
      duration: 1,
      top: "0",
      left: "1rem",
      width: "170px",
    });
  }, []);

  const scroll = (adress) => {
    var element = document.querySelector(`.${adress}`);
    element.scrollIntoView({ behavior: "smooth", block: "end" });
  };
  return (
    <div className="Sec1">
      <div className="Header">
        <div className="logo-box">
          <img className="logo" src="./logo.png" alt="" />
        </div>
        <div className="header-items">
          <span onClick={() => scroll("SlidePage")}>category</span>
          <span onClick={() => scroll("about")}>about us</span>
          <span onClick={() => scroll("blog")}>blog</span>
          <span onClick={() => scroll("Contact")}>contact us</span>
        </div>
        <style jsx>{`
          .Header {
            width: 100%;

            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: white;
            padding-bottom: 10px;
          }
          .logo-box {
            width: 20%;
          }
          .logo {
            position: absolute;
            top: -60%;
            left: 25%;
            z-index: 50;
          }
          .header-items {
            width: 30%;
            height: 5vh;
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            justify-content: space-evenly;
          }
          .header-items span {
            font-size: 1.3rem;
            cursor: pointer;
            opacity: 0.7;
            transition: 0.2s all linear;
          }
          .header-items span:hover {
            opacity: 1;
            color: #43a359;
          }
          @media only screen and (max-width: 600px) {
            .header-items {
              display: none;
            }
            .logo-box {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .logo {
              width: 35%;
              margin-left: 3%;
            }
          }
        `}</style>
      </div>
      <div className="Sec1-content">
        <img className="title" src="./title.png" alt="" />

        <div className="Certification-list">
          <Certification url={"./halal.png"} />
          <Certification url={"./haccp.png"} />
          <Certification url={"./jas.png"} />
        </div>
      </div>
      <style jsx>{`
        .Sec1 {
          width: 100%;
        }
        .Sec1-content {
          width: 100%;
          height: 90vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
        }
        .title {
          width: 60%;
        }
        .Certification-list {
          width: 90%;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
        }
        @media only screen and (max-width: 600px) {
          .title {
            width: 96%;
          }
          .Certification-list {
            height: 70%;
            flex-direction: column;
            justify-content: space-between;
          }
        }
      `}</style>
    </div>
  );
}

export default Sec1;
