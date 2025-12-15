import React, { useState } from "react";

export default function ClassroomPollingApp() {
  const [question, setQuestion] = useState("Which topic do you want to revise?");
  const [options, setOptions] = useState([
    { text: "React Basics", votes: 0 },
    { text: "JavaScript ES6", votes: 0 },
    { text: "Node.js", votes: 0 },
    { text: "Databases", votes: 0 }
  ]);
  const [hasVoted, setHasVoted] = useState(false);

  const vote = (index) => {
    if (hasVoted) return;
    const updated = [...options];
    updated[index].votes += 1;
    setOptions(updated);
    setHasVoted(true);
  };

  const totalVotes = options.reduce((sum, opt) => sum + opt.votes, 0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-xl font-bold mb-4 text-center">📊 Classroom Poll</h1>
        <p className="mb-4 font-medium">{question}</p>

        {options.map((opt, index) => (
          <button
            key={index}
            onClick={() => vote(index)}
            className="w-full mb-3 p-2 rounded-xl border hover:bg-blue-50"
          >
            {opt.text}
            {hasVoted && (
              <div className="text-sm text-gray-600">
                Votes: {opt.votes} ({totalVotes === 0 ? 0 : Math.round((opt.votes / totalVotes) * 100)}%)
              </div>
            )}
          </button>
        ))}

        {hasVoted && (
          <p className="text-green-600 text-center mt-4">✅ Thank you for voting!</p>
        )}
      </div>
    </div>
  );
}
