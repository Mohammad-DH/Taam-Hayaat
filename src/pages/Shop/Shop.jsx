import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { root } from "../../context/API";
import Footer from "../Footer";
import Language from "../Language";
import Card from "./components/Card";

function Shop() {
  const { cats, SETcats, lan } = useContext(root);
  const [products, setproducts] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    axios({
      method: "get",
      url: `http://127.0.0.1:8000/category/${id}/products/`,
      responseType: "stream",
    }).then(function (res) {
      setproducts(res.data);
    });
    if (!cats) {
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/category/",
        responseType: "stream",
      }).then(function (res) {
        SETcats(res.data);
      });
    }
  }, []);

  return (
    <div className="shop">
      <div className="shop-content">
        <div className={lan === "AR" ? "filter" : "filter filter_EN"}>
          <div className="filter-lan">
            <Language />
          </div>
          {cats
            ? cats.map((e) => {
                return (
                  <div className="shop-cat">
                    <a href={`/shop/${e.id}`}>
                      {lan === "AR" ? e.label_ar : e.label}
                    </a>
                  </div>
                );
              })
            : ""}
        </div>
        <div className="list">
          {products
            ? products.map((e) => {
                return <Card catID={id} data={e} />;
              })
            : ""}
        </div>
      </div>
      <Footer />
      <style jsx>{`
        .shop {
          width: 100%;
          min-height: 100vh;
          background-image: url("../../../bg1.png");
        }
        .shop-content {
          display: flex;
          align-items: flex-start;
          justify-content: space-evenly;
          padding-top: 1rem;
          padding-bottom: 1rem;
        }
        .filter {
          margin-top: 2%;
          padding: 1rem;
          width: 14%;
          height: 40%;
          background-color: rgba(255, 255, 255, 0.8);
          border: 2px solid white;
          border-radius: 1rem;
          text-align: right;
          font-size: 1.6rem;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: space-evenly;
        }
        .filter_EN {
          text-align: left;
          align-items: flex-start;
        }
        .filter-lan {
          margin-bottom: 10%;
        }
        .filter a {
          color: black;
          text-decoration: none;
        }
        .filter a:hover {
          color: rgb(66, 66, 66);
        }
        .list {
          width: 76%;
          height: 100%;
          border: 2px solid white;
          border-radius: 1rem;
          display: flex;
          align-items: flex-start;
          justify-content: space-evenly;
          flex-wrap: wrap;
          padding: 1rem;
        }
        @media only screen and (max-width: 600px) {
          .shop {
            align-items: center;
            justify-content: center;
          }
          .filter {
            width: 14%;
            height: 40%;
            font-size: 1.2rem;
            display: none;
          }
          .list {
            width: 80%;
            height: 100%;
            flex-direction: column;
            flex-wrap: nowrap;
          }
        }
      `}</style>
    </div>
  );
}

export default Shop;
