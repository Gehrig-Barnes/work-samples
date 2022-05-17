import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, NavLink } from "react-router-dom";
import Login from './components/Login'
import Organizations from "./components/Organizations";
import EditOrg from "./components/EditOrg";
import CreateOrg from "./components/CreateOrg";
import ShiftsTable from "./components/ShiftsTable"

//EVENTUAL TO_DOS
//create validations


//TO_DO
//When a user has an Org, we need to Render the page with the Org name.
//underneath will have three different buttons. 1) View Shift 2) Edit 3)Leave
//for view shift, we have to create a component called shift
//leave, we just have to create a button that allows us to patch organization_id
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
  console.log(user)
  // console.log(user.id)
  function leaveOrg(){
    fetch(`/leave_org/${user.id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        organisation_id: null
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((r) => r.json())
    .then((data) => setUser(data))
  }

 
  function renderSelectOrg () {
    const  {organisation_id } = user
    if(organisation_id){
      return (
      <div>
        <h2>Logged in as, {user.name}</h2>
        <h1>{user.organisation.name}</h1>
        <button>View Shift</button>
        <button>Edit</button>
        <button onClick={() => leaveOrg()}>Leave</button>
        <div>
          <ShiftsTable shifts={user.all_shifts}/>
        </div>
      </div>
      )
    }

    return (!showEditForm.show ? 
    
    <>
      <Organizations 
        setShowEditForm={setShowEditForm} 
        user={user}
        setUser={setUser}
      />

      <CreateOrg setUser={setUser}/> 

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
