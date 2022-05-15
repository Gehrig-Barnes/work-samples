import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from './components/Login'
import Organizations from "./components/Organizations";


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

  function renderSelectOrg () {
    const  {organisation_id } = user
    if(organisation_id){
      return <h1>Your org here</h1>
    }

    return <Organizations user={user}/>
    //if user.organization is null, then render out org select component.
    //e
  }

if (!user) return (
  <>
  <Login onLogin={setUser}/>
  </>
)


  return (
    <div className="App">
      hello world
      <button onClick={handleLogOutClick}>Logout</button>
      <Routes></Routes>
      {renderSelectOrg()}
    </div>
  );
}

export default App;
