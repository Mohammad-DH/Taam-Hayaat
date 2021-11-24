import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="detail">
        <a href="mailto: taamhayat@gmail.com">email : taamhayat@gmail.com</a>
        <br />
        <span>phone : +989162821510</span>
        <br />
        <span>adress : iran , tehran </span>
        <br />
      </div>

      <style jsx>{`
        .footer {
          width: 100%;
          background-color: rgb(253, 253, 229);
          position: relative;
        }
        .detail {
          font-family: "Nunito";
          height: 30%;
          font-size: 1.5rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
          padding: 1rem 0;
          line-height: 2.4rem;
        }
        .detail a {
          color: black;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}

export default Footer;
