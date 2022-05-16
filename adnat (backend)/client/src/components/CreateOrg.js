import React, { useState } from "react";

function CreateOrg({setUser}){
    const [newOrg, setNewOrg] = useState({
        name: '',
        hourly_rate: 0
    })

    const handleInput = (e) => setNewOrg((prev) => {
        return {
            ...prev,
            [e.target.name]: e.target.value,
        }
    })

    function handleSubmit(e){
        e.preventDefault();
        fetch(`/organisations`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: newOrg.name,
                hourly_rate: newOrg.hourly_rate
            }),
        })
        .then((r) => r.json())
        .then((data) => setUser(data))
    }

    return (
        <div>
            <h1>Create an Org</h1>
            <form onSubmit={handleSubmit}>
                <label>name: </label>
                <input name="name" type="text" value={newOrg.name} onChange={handleInput}/><br></br>
                <label>Hourly Rate: $</label>
                <input name="hourly_rate" type="number" value={newOrg.hourly_rate} onChange={handleInput}/>
                <input type="submit" value="create and join"/>
            </form>
        </div>
    )
}

export default CreateOrg