import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError("Please enter email and password");
      return;
    }

    if (email === "student@gmail.com" && password === "123456") {
      window.location.href = "/dashboard";
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-container">

      <div className="login-box">

        <h1>Student Placement Portal</h1>

        <h2>Student Login</h2>

        <form onSubmit={handleLogin}>

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="error">{error}</p>}

          <button type="submit">
            Login
          </button>

        </form>

        <p className="register-text">
          Don't have an account?
          <a href="/register"> Register</a>
        </p>

      </div>

    </div>
  );
}

export default Login;