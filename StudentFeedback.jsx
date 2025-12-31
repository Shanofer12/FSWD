import React, { useState } from "react";

const StudentFeedback = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (rating === 0 || comment.trim() === "") {
      setError("⚠️ Please give rating and comment");
      return;
    }

    setError("");
    setSubmitted(true);
  };

  const resetFeedback = () => {
    setRating(0);
    setComment("");
    setSubmitted(false);
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f1f5f9;
        }

        .container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .card {
          background: #fff;
          width: 360px;
          padding: 30px;
          border-radius: 14px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
          text-align: center;
        }

        h2 {
          margin-bottom: 15px;
        }

        .stars {
          margin-bottom: 15px;
        }

        .star {
          font-size: 28px;
          cursor: pointer;
          color: #cbd5e1;
        }

        .star.active {
          color: #facc15;
        }

        textarea {
          width: 100%;
          height: 80px;
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #ccc;
          resize: none;
        }

        button {
          width: 100%;
          margin-top: 15px;
          padding: 12px;
          background: #2563eb;
          color: #fff;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          cursor: pointer;
        }

        button:hover {
          background: #1e40af;
        }

        .error {
          color: red;
          margin-top: 10px;
        }

        .preview {
          background: #f8fafc;
          padding: 15px;
          border-radius: 10px;
          margin-top: 15px;
          text-align: left;
        }
      `}</style>

      <div className="container">
        <div className="card">
          <h2>Student Feedback</h2>

          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((num) => (
                  <span
                    key={num}
                    className={`star ${num <= rating ? "active" : ""}`}
                    onClick={() => setRating(num)}
                  >
                    ★
                  </span>
                ))}
              </div>

              <textarea
                placeholder="Write your feedback..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />

              <button type="submit">Submit Feedback</button>

              {error && <p className="error">{error}</p>}
            </form>
          ) : (
            <>
              <h3>✅ Feedback Submitted</h3>

              <div className="preview">
                <p>
                  <strong>Rating:</strong> {rating} / 5
                </p>
                <p>
                  <strong>Comment:</strong> {comment}
                </p>
              </div>

              <button onClick={resetFeedback}>Give Another Feedback</button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default StudentFeedback;
