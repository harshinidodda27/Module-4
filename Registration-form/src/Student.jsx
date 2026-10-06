import { useState } from "react";

function Student() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");

  function register() {
    if (name !== "" && email !== "" && course !== "") {
      setMessage("Registration Successful");
    } else {
      setMessage("Please fill all fields");
    }
  }

  return (
    <div>
      <h2>Student Registration Form</h2>

      <p>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </p>

      <p>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </p>

      <p>
        Course:
        <input
          type="text"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
      </p>

      <button onClick={register}>Register</button>

      <h3>{message}</h3>
    </div>
  );
}

export default Student;