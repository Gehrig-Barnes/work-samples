import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import ResetPasswordForm from "./ResetPasswordForm";

function Login({ onLogin }) {
  const [showResetForm, setShowResetForm] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <div>
            Don't have an account?
            <button variant="outline-dark" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
            <button onClick={() => setShowResetForm(!showResetForm)}>
              {" "}
              {showResetForm ? "Cancel Reset Password" : "Reset Password"}
            </button>
            {showResetForm ? (
              <ResetPasswordForm setShowResetForm={setShowResetForm} />
            ) : null}
          </div>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <p>
            Already have an account? &nbsp;
            <button onClick={() => setShowLogin(true)}>Log In</button>
          </p>
        </>
      )}
    </div>
  );
}

export default Login;
