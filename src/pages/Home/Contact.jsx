import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { root } from "../../context/API";

function Contact() {
  const { lan } = useContext(root);

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [note, setnote] = useState("");

  const send = () => {
    const params = new URLSearchParams();
    params.append("name", name);
    params.append("email", email);
    params.append("phone", phone);
    params.append("note", note);
    axios
      .post("http://localhost:8000/form/", params)
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
    <div className="Contact">
      <img className="contact-flower" src="./full-flower.png" alt="" />
      <div className="inner">
        <div className="form">
          <input
            value={name}
            onChange={(e) => setname(e.target.value)}
            placeholder={lan === "AR" ? "اسم" : "name"}
            type="text"
          />
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder={lan === "AR" ? "البريد الإلكتروني" : "email"}
            type="email"
          />
          <input
            value={phone}
            onChange={(e) => setphone(e.target.value)}
            placeholder={lan === "AR" ? "رقم الهاتف" : "phone number"}
            className=""
            type="tel"
          />
          <textarea
            value={note}
            onChange={(e) => setnote(e.target.value)}
            placeholder={lan === "AR" ? "رسالة" : "message"}
            maxLength="5000"
            className="message"
            cols="30"
            rows="10"
          ></textarea>
          <span onClick={send} className="send">
            {lan === "AR" ? "إرسال" : "send"}
          </span>
        </div>
      </div>

      <style jsx>{`
        .Contact {
          position: relative;
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .contact-flower {
          position: absolute;
          z-index: -1;
          animation: flower 800s linear infinite;
        }
        .inner {
          width: 28%;
          height: 80vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          border: 2px solid white;
          border-radius: 0.5rem 7rem 0.5rem 7rem;
          background-color: rgba(255, 255, 255);
          z-index: 10;
        }
        .form {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
        }
        .form input {
          width: 80%;
          height: 3.4vw;
          border: none;
          border-radius: 500vh;
          padding: 0rem 1rem;
          font-size: 1.6rem;
          border: 2px solid rgb(0, 110, 255);
          text-align: right;
        }
        .message {
          width: 80%;
          height: 30%;
          border-radius: 30px;
          font-size: 1.6rem;
          overflow-x: hidden;
          scrollbar-width: none;
          padding: 1rem;
          resize: none;
          border: 2px solid rgb(0, 110, 255);
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
        @media only screen and (max-width: 600px) {
          .contact-flower {
            width: 95%;
          }
          .inner {
            width: 95%;
            height: 97%;
          }
          .form input {
            width: 80%;
            height: 13vw;
          }
          .send {
            width: 40%;
            height: 8%;
            font-size: 1.8rem;
          }
          .detail {
            height: 30%;
            font-size: 1.4rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Contact;
