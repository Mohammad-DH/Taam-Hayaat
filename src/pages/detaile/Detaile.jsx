import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
function Detaile() {
  const [data, setdata] = useState(null);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [note, setnote] = useState("");

  let { catID, id } = useParams();

  useEffect(() => {
    axios({
      method: "get",
      url: `http://127.0.0.1:8000/category/${catID}/products/${id}/`,
      responseType: "stream",
    }).then(function (res) {
      setdata(res.data);
    });
  }, []);

  const scroll = (adress) => {
    var element = document.querySelector(`.${adress}`);
    element.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  const send = () => {
    const params = new URLSearchParams();
    params.append("name", name);
    params.append("email", email);
    params.append("phone", phone);
    params.append("note", note);
    axios
      .post("http://localhost:8000/form", params)
      .then(function (res) {
        if (res.status === 201) {
          setname("");
          setemail("");
          setphone("");
          setnote("");
          alert("message has been sent successfully");
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <div className="Detaile">
      <div className="product-images">
        {data
          ? data.image_set.map((e) => {
              return (
                <div className="image-box">
                  <img className="detaile-image" src={e.image} alt="" />
                </div>
              );
            })
          : ""}
        <div className="detail-form">
          <div className="inner-form">
            <div className="form1">
              <input
                value={name}
                onChange={(e) => setname(e.target.value)}
                placeholder="اسم"
                type="text"
              />
              <input
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="البريد الإلكتروني"
                type="email"
              />
            </div>
            <input
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="form2"
              placeholder="اسم "
              type="text"
            />
            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="form2"
              placeholder="البريد الإلكتروني "
              type="email"
            />

            <input
              value={phone}
              onChange={(e) => setphone(e.target.value)}
              placeholder="رقم الهاتف"
              className=""
              type="tel"
            />
            <textarea
              value={note}
              onChange={(e) => setnote(e.target.value)}
              placeholder="رسالة"
              maxLength="5000"
              className="detail-message"
              cols="30"
              rows="10"
            ></textarea>
            <span className="send">إرسال</span>
          </div>
        </div>
      </div>
      <div onClick={send} className="product-info">
        <div className="inner-info">
          <h1>{data ? data.title : ""}</h1>
          <p className="info-intro">{data ? data.intro : ""}</p>
          <div className="info-description">
            <p>{data ? data.description : ""}</p>
          </div>
          <br />
          <span
            onClick={() => scroll("detail-form")}
            className="product-info-btn"
          >
            إرسال رسالة
          </span>
        </div>
      </div>
      <style jsx>{`
        .Detaile {
          display: flex;
          align-items: flex-start;
          justify-content: space-evenly;
          background-image: url("../../bg1.png");
        }
        .product-images {
          width: 70%;
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
          padding-bottom: 5rem;
        }
        .image-box {
          width: 95%;
          height: 60vh;
          overflow: hidden;
          margin: 2rem 0;
          border: 2px solid white;
          border-radius: 1rem;
          overflow: hidden;
        }

        .detaile-image {
          width: 100%;
        }
        .detail-form {
          width: 95%;
          height: 60vh;
          background-color: rgba(255, 252, 212, 0.8);
          border-radius: 1rem;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }
        .inner-form {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
        }
        .inner-form input {
          width: 20vw;
          height: 2vw;
          border-radius: 50vw;
          border: 1px solid rgb(0, 110, 255);
          padding: 1rem;
          font-size: 1.6rem;
          text-align: right;
        }
        .form1 {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
        }
        .form2 {
          display: none;
        }
        .detail-message {
          width: 50%;
          height: 30%;
          border-radius: 1rem;
          resize: none;
          border: none;
          padding: 1rem;
          border: 1px solid rgb(0, 110, 255);
          font-size: 1.6rem;
          text-align: right;
        }
        .send {
          width: 12vw;
          height: 4vw;
          background-color: rgb(255, 255, 255);
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 500vw;
          margin-top: 2%;
          font-size: 2rem;
          border: 2px solid rgb(0, 255, 136);
          cursor: pointer;
          transition: all 0.2s linear;
        }
        .send:hover {
          background-color: rgb(0, 255, 136);
          color: white;
        }
        .product-info {
          width: 29%;
          height: 100vh;
          position: fixed;
          top: 0;
          right: 0;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        .inner-info {
          padding: 1rem;
          width: 83%;
          height: 88%;
          border: 3px solid white;
          background-color: rgba(255, 252, 212, 0.8);
          border-radius: 1rem;
          text-align: right;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: space-between;
        }
        .info-intro {
          font-size: 1.4rem;
        }
        .info-description {
          width: 95%;
          padding: 0.5rem 1rem;
          height: 55%;
          overflow-y: auto;
          font-size: 1.1rem;
          text-align: justify;
          word-wrap: break-word;
        }
        .product-info-btn {
          width: 35%;
          padding: 0.75rem 1.5rem;
          border: 2px solid black;
          border-radius: 0.5rem;
          font-size: 1.6rem;
          align-self: center;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s linear;
        }
        .product-info-btn:hover {
          background-color: rgba(255, 255, 255, 0.4);
          transform: scale(1.05);
        }
        @media only screen and (max-width: 600px) {
          .Detaile {
            flex-direction: column-reverse;
            align-items: center;
          }
          .product-images {
            width: 100%;
            position: relative;
          }
          .image-box {
            width: 95%;
            height: 35vh;
            margin: 1rem 0;
          }
          .product-info {
            width: 100%;
            height: fit-content;
            position: relative;
            justify-content: center;
            padding-top: 2rem;
          }
          .product-info-btn {
            width: 40%;
            padding: 0.5rem 1rem;
            font-size: 1.4rem;
            margin-top: 5%;
          }
          .inner-form input {
            width: 80%;
            height: 2.5vw;
            font-size: 1.4rem;
          }
          .form1 {
            display: none;
          }
          .form2 {
            display: block;
          }
          .detail-message {
            width: 80%;
            font-size: 1.4rem;
          }
          .send {
            width: 30%;
            height: 8%;
            font-size: 1.6rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Detaile;
