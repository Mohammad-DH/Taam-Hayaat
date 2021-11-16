import React from "react";

function Header() {
  const scroll = (adress) => {
    var element = document.querySelector(`.${adress}`);
    element.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  return (
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
          width: 50%;
          margin-left: 3%;
        }
        .header-items {
          width: 30%;
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          justify-content: space-evenly;
        }
        .header-items span {
          font-size: 1.2rem;
          cursor: pointer;
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
  );
}

export default Header;
