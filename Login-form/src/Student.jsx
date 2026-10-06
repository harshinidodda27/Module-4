import { useState } from "react";

function Student() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function login() {
    if (username !== "" && password !== "") {
      setMessage("Login Successful");
    } else {
      setMessage("Please enter username and password");
    }
  }

  return (
    <div>
      <h2>Login Form</h2>

      <p>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </p>

      <p>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </p>

      <button onClick={login}>Login</button>

      <h3>{message}</h3>
    </div>
  );
}

export default Student;