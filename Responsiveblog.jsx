import React, { useState } from "react";

const BlogWithComments = () => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const addComment = (e) => {
    e.preventDefault();

    if (!commentText.trim()) return;

    const newComment = {
      id: Date.now(),
      text: commentText,
    };

    setComments([newComment, ...comments]);
    setCommentText("");
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f8fafc;
        }

        .container {
          max-width: 900px;
          margin: auto;
          padding: 20px;
        }

        .blog {
          background: #fff;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          margin-bottom: 25px;
        }

        .blog h1 {
          margin-bottom: 10px;
        }

        .blog p {
          line-height: 1.6;
          color: #374151;
        }

        .comments {
          background: #fff;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        form textarea {
          width: 100%;
          height: 70px;
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #ccc;
          resize: none;
          margin-bottom: 10px;
        }

        button {
          padding: 10px 18px;
          background: #2563eb;
          color: #fff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        button:hover {
          background: #1e40af;
        }

        .comment {
          padding: 10px;
          border-bottom: 1px solid #e5e7eb;
        }

        .comment:last-child {
          border-bottom: none;
        }

        .count {
          font-weight: bold;
          margin-bottom: 10px;
        }

        @media (max-width: 600px) {
          .blog, .comments {
            padding: 15px;
          }
        }
      `}</style>

      <div className="container">
        {/* BLOG POST */}
        <div className="blog">
          <h1>Building Responsive Apps with React</h1>
          <p>
            React makes it simple to build dynamic and responsive user
            interfaces. With component-based architecture and state management,
            real-time updates like comments become easy to implement.
          </p>
        </div>

        {/* COMMENTS */}
        <div className="comments">
          <p className="count">Comments ({comments.length})</p>

          <form onSubmit={addComment}>
            <textarea
              placeholder="Write a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button type="submit">Add Comment</button>
          </form>

          {comments.map((c) => (
            <div key={c.id} className="comment">
              {c.text}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogWithComments;
