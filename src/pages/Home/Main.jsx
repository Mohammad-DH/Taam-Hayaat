import React, { useEffect, useContext } from "react";

import axios from "axios";

import Footer from "../Footer";
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
      <Footer />
      <style jsx>{`
        .Main {
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
}

export default Main;
