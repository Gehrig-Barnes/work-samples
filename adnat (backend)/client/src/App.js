import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";


function App() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogOutClick(){
    fetch("/logout",{
        method: "DELETE"
    }).then((r) => {
        if(r.ok){
            setUser(null);
        }
    });
    // Navigate to home page after logout and clear history
    navigate("/");
}


  return (
    <div className="App">
      hello world
      <Routes></Routes>
    </div>
  );
}

export default App;
