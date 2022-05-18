import React, { useState } from "react";

function ResetPasswordForm({ setShowResetForm }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleResetPasswordForm(e) {
    e.preventDefault();
    const newPassword = {
      email: email,
      password: password,
    };

    fetch("/reset", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPassword),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then(setShowResetForm(false));
      } else {
        r.json().then((err) => setError(err.error));
      }
    });
  }
  return (
    <div>
      <form onSubmit={handleResetPasswordForm}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br></br>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br></br>
        <input type="submit" value="update"></input>
        {error.length > 0 ? (
          <alert className="mt-3" variant="danger">
            {error}
          </alert>
        ) : null}
      </form>
    </div>
  );
}

export default ResetPasswordForm;
