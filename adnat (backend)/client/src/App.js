import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from './components/Login'
import Organizations from "./components/Organizations";
import EditOrg from "./components/EditOrg";
import CreateOrg from "./components/CreateOrg";


function App() {
  const [user, setUser] = useState(null)
  const [showEditForm, setShowEditForm] = useState({
    show: false,
    org: null
  })

  

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
}

  function renderSelectOrg () {
    const  {organisation_id } = user
    if(organisation_id){
      return <h1>Your org here</h1>
    }

    return (!showEditForm.show ? 
    
    <>
      <Organizations 
        setShowEditForm={setShowEditForm} 
        user={user}
        setUser={setUser}
      />

      <CreateOrg/> 

    </>: 
    
    <EditOrg 
      setShowEditForm={setShowEditForm} 
      org={showEditForm.org}
    /> )
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
      {renderSelectOrg()}
    </div>
  );
}

export default App;
