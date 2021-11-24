import React, { useContext } from "react";
import { root } from "../context/API";

function Language() {
  const { lan, SETlan } = useContext(root);

  const change = () => {
    if (lan === "AR") {
      SETlan("EN");
    } else {
      SETlan("AR");
    }
  };

  return (
    <div onClick={change} className="Language">
      {lan === "AR" ? "AR" : "EN"}
      <style jsx>{`
        .Language {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 500vh;
          border: 1px solid #43a359;
          color: #43a359;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s linear;
          font-size: 1.2rem;
          font-weight: 600;
        }
        .Language:hover {
          border: 1px solid #ffffff;
          color: #ffffff;
          background-color: #43a359;
        }
      `}</style>
    </div>
  );
}

export default Language;
