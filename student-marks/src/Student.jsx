import { useState } from "react";

function Student({ name, subject }) {
  const [marks, setMarks] = useState(50);

  return (
    <div>
      <h2>Student Marks</h2>

      <p>Student Name: {name}</p>
      <p>Subject: {subject}</p>
      <p>Marks: {marks}</p>

      <button onClick={() => setMarks(marks + 5)}>
        Increase Marks
      </button>

      <button onClick={() => setMarks(marks - 5)}>
        Decrease Marks
      </button>
    </div>
  );
}

export default Student;