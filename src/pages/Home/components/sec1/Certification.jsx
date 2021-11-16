import React from "react";

function Certification({ url }) {
  return (
    <div className="Certification">
      <img className="Certification-image" src={url} alt="" />

      <style jsx>{`
        .Certification {
          width: 30vh;
          height: 30vh;
          border: 3px solid white;
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s linear all;
        }
        .Certification:hover {
          background-color: rgba(255, 255, 255, 0.3);
        }
        .Certification-image {
          width: 90%;
          filter: grayscale(1);
          transition: all linear 0.2s;
          cursor: pointer;
        }
        .Certification-image:hover {
          filter: grayscale(0);
        }
        @media only screen and (max-width: 600px) {
          .Certification {
            width: 40vw;
            height: 40vw;
            border: 2px solid white;
          }
          .Certification-image {
            filter: grayscale(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Certification;
