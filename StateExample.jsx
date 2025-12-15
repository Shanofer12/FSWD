import { useState } from "react";

export default function StateExample() {
  const [count, setCount] = useState(0);

  function buttonclick() {
    setCount(count + 10);
  }

  return (
    <>
      {/* INTERNAL CSS */}
      <style>
        {`
          body {
            background: linear-gradient(135deg, #4B0082, #8A2BE2);
            font-family: 'Poppins', sans-serif;
          }

          .title {
            color: white;
            text-align: center;
            font-weight: 700;
            margin-bottom: 25px;
            text-shadow: 0 2px 10px rgba(0,0,0,0.4);
          }

          .countBtn {
            background: linear-gradient(135deg, #A039E5, #C383FF);
            color: white;
            padding: 14px 28px;
            border: none;
            border-radius: 12px;
            cursor: pointer;
            font-size: 18px;
            font-weight: 600;
            transition: 0.3s ease-in-out;
          }

          .countBtn:hover {
            transform: scale(1.08);
            box-shadow: 0px 10px 25px rgba(160, 57, 229, 0.5);
          }
        `}
      </style>

      {/* INLINE + INTERNAL */}
      <h1
        className="title"
        style={{
          fontSize: "36px",
          letterSpacing: "1.5px",
          marginTop: "20px",
        }}
      >
        State Example
      </h1>

      <button
        className="countBtn"
        onClick={buttonclick}
        style={{
          display: "block",
          margin: "0 auto",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.25)",
        }}
      >
        Visitor Count = {count}
      </button>
    </>
  );
}
