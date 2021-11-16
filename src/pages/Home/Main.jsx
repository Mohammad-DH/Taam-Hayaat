import React, { useEffect, useContext } from "react";

import axios from "axios";

import Sec1 from "./Sec1";
import SlidePage from "./Slider";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import { root } from "../../context/API";

function Main() {
  const { SETcats } = useContext(root);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://127.0.0.1:8000/category/",
      responseType: "stream",
    }).then(function (res) {
      SETcats(res.data);
    });
  }, []);

  return (
    <div className="Main">
      <Sec1 />
      <SlidePage />
      <About />
      <Blog />
      <Contact />
      <div className="madeby">
        <a
          href="https://www.mohammaddh.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Front end made by MohammadDH
        </a>
      </div>
      <style jsx>{`
        .Main {
          overflow-x: hidden;
        }
        .madeby {
          height: 1vh;
          padding: 1% 0;
          margin-left: 1%;
        }
        .madeby a {
          color: rgb(250, 250, 250);
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}

export default Main;
