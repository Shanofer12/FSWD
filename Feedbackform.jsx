import React, { useState } from "react";

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) return;

    const newFeedback = {
      id: Date.now(),
      name,
      email,
      message
    };

    setFeedbackList([newFeedback, ...feedbackList]);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-4xl grid md:grid-cols-2 gap-6">

        {/* Feedback Form */}
        <div>
          <h2 className="text-xl font-bold mb-4">📝 Feedback Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
            <textarea
              placeholder="Your Feedback"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border rounded-lg"
              rows="4"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Submit Feedback
            </button>
          </form>
        </div>

        {/* Display Feedback */}
        <div>
          <h2 className="text-xl font-bold mb-4">📊 Submitted Feedback</h2>
          {feedbackList.length === 0 ? (
            <p className="text-gray-500">No feedback submitted yet.</p>
          ) : (
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {feedbackList.map((fb) => (
                <div key={fb.id} className="border rounded-lg p-3">
                  <p className="font-semibold">{fb.name}</p>
                  <p className="text-sm text-gray-500">{fb.email}</p>
                  <p className="mt-2">{fb.message}</p>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
