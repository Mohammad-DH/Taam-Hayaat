import React from "react";
import BlogPost from "./components/Blog/BlogPost";

function Blog() {
  return (
    <div className="blog">
      <img className="Blog-flower" src="./big-flower.png" alt="" />
      <div className="Blog-title-box">
        <img src="./blog.png" alt="" />
      </div>
      <div className="BlogPost-list">
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </div>

      <style jsx>{`
        .blog {
          position: relative;
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
        }
        .Blog-flower {
          position: absolute;
          top: 1.5%;
          left: -26%;
          height: 97%;
          animation: flower 600s linear infinite;
        }
        @keyframes flower {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(3600deg);
          }
        }
        .Blog-title-box {
          height: 40%;
        }
        .BlogPost-list {
          height: 60%;
          width: 90%;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
        }
        @media only screen and (max-width: 600px) {
          .blog {
            justify-content: space-around;
          }
          .Blog-flower {
            position: absolute;
            top: 15%;
            left: -78%;
            height: 70%;
            animation: flower 400s linear infinite;
          }
          .Blog-title-box {
            height: 25%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .Blog-title-box img {
            height: 100%;
          }
          .BlogPost-list {
            height: 70%;
            width: 90%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
          }
        }
      `}</style>
    </div>
  );
}

export default Blog;
