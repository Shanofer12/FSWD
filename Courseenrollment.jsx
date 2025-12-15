import React, { useState } from "react";

export default function CourseEnrollment() {
  const [studentName, setStudentName] = useState("");
  const [course, setCourse] = useState("");
  const [enrollments, setEnrollments] = useState([]);

  const handleEnroll = (e) => {
    e.preventDefault();

    if (!studentName || !course) return;

    const newEnrollment = {
      id: Date.now(),
      studentName,
      course
    };

    setEnrollments([newEnrollment, ...enrollments]);
    setStudentName("");
    setCourse("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-3xl grid md:grid-cols-2 gap-6">

        {/* Enrollment Form */}
        <div>
          <h2 className="text-xl font-bold mb-4">📚 Course Enrollment</h2>
          <form onSubmit={handleEnroll} className="space-y-4">
            <input
              type="text"
              placeholder="Student Name"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="w-full p-2 border rounded-lg"
            />

            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="w-full p-2 border rounded-lg"
            >
              <option value="">Select Course</option>
              <option value="React.js">React.js</option>
              <option value="Node.js">Node.js</option>
              <option value="Python">Python</option>
              <option value="Data Structures">Data Structures</option>
            </select>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
            >
              Enroll
            </button>
          </form>
        </div>

        {/* Enrolled Course List */}
        <div>
          <h2 className="text-xl font-bold mb-4">✅ Enrolled Students</h2>
          {enrollments.length === 0 ? (
            <p className="text-gray-500">No enrollments yet.</p>
          ) : (
            <ul className="space-y-3 max-h-96 overflow-y-auto">
              {enrollments.map((enroll) => (
                <li key={enroll.id} className="border rounded-lg p-3">
                  <p className="font-semibold">{enroll.studentName}</p>
                  <p className="text-sm text-gray-600">Course: {enroll.course}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </div>
  );
}
