import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

function handleLogin() {
  fetch("http://127.0.0.1:8000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message === "Login successful") {
  localStorage.setItem("loggedIn", "true");
  window.location.href = "/dashboard";
} else {
        alert("Login failed");
      }
    });
}


  return (
    <div>
      <h2>Login</h2>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button type="button" onClick={handleLogin}>Login</button>

      <p>
        Don’t have an account? <a href="/signup">Signup</a>
      </p>
    </div>
  );
}

export default Login;
