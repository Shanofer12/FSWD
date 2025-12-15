import React, { useState } from "react";

const Quiz = () => {
  const questions = [
    {
      question: "What is React?",
      options: [
        "A JavaScript Library",
        "A Programming Language",
        "A Database",
        "An Operating System"
      ],
      answer: "A JavaScript Library"
    },
    {
      question: "Which hook is used for state management?",
      options: ["useEffect", "useState", "useRef", "useMemo"],
      answer: "useState"
    },
    {
      question: "Who developed React?",
      options: ["Google", "Microsoft", "Facebook", "Amazon"],
      answer: "Facebook"
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizFinished(true);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Mini Online Quiz</h1>

        {quizFinished ? (
          <div>
            <h2>Final Score</h2>
            <p style={styles.score}>
              {score} / {questions.length}
            </p>
          </div>
        ) : (
          <>
            <p style={styles.progress}>
              Question {currentQuestion + 1} of {questions.length}
            </p>

            <h2>{questions[currentQuestion].question}</h2>

            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                style={styles.button}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}

            <p style={styles.liveScore}>Live Score: {score}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;

/* ===================== STYLES ===================== */

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#eef2f7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    backgroundColor: "#ffffff",
    width: "400px",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    textAlign: "center"
  },
  title: {
    marginBottom: "15px"
  },
  progress: {
    color: "#555"
  },
  button: {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px"
  },
  liveScore: {
    marginTop: "15px",
    fontWeight: "bold"
  },
  score: {
    fontSize: "28px",
    color: "#28a745"
  }
};



