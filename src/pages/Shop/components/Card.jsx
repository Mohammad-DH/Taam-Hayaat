import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { root } from "../../../context/API";

function Card({ catID, data }) {
  const { lan } = useContext(root);
  let { id, producticon, title, title_ar } = data;
  return (
    <Link style={{ textDecoration: "none" }} to={`/detaile/${catID}/${id}`}>
      <div className="shop-card">
        <img className="shop-card-image" src={producticon.icon} alt="" />
        <h4 className="shop-card-title">{lan === "AR" ? title_ar : title}</h4>
        <style jsx>{`
          .shop-card {
            width: 14vw;
            height: 20vw;
            background-color: rgba(255, 255, 255, 0.9);
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            padding: 1rem 0;
            margin-top: 10px;
            border: 2px solid white;
            border-radius: 0.5rem;
            transition: all 0.2s linear;
          }
          .shop-card:hover {
            background-color: rgba(238, 237, 237, 0.9);
            transform: scale(1.01);
          }

          .shop-card-image {
            width: 90%;
            height: 17vw;
            border-radius: 10px;
          }
          .shop-card-title {
            color: black;
          }
          @media only screen and (max-width: 600px) {
            .shop-card {
              width: 80vw;
              height: 50vh;
              margin-bottom: 5%;
            }
            .shop-card-image {
              height: 100%;
            }
          }
        `}</style>
      </div>
    </Link>
  );
}

export default Card;
