import React from "react";

function BlogPost() {
  return (
    <div className="BlogPost">
      {/* <img className="blog-image" src="./blog-image.jpg" alt="" /> */}

      <style jsx>{`
        .BlogPost {
          width: 30vh;
          height: 30vh;
          border: 3px solid white;
          border-radius: 1rem;
          overflow: hidden;
          background-image: url("./blog-image.jpg");
          background-repeat: no-repeat;
          background-size: cover;
          z-index: 50;
        }
        .blog-image {
          width: 100%;
        }
        @media only screen and (max-width: 600px) {
          .BlogPost {
            width: 40vw;
            height: 40vw;
            border: 2px solid white;
          }
        }
      `}</style>
    </div>
  );
}

export default BlogPost;
