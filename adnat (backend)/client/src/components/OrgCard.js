import React, { useState } from "react";

function OrgCard ({ orgData, setShowEditForm, userId }){
    const [orgId, setOrgId] = useState(null)
    console.log(orgId)

    const submitHandler = (e) => {
        e.preventDefault()
        fetch(`/join/${userId}`, {
            method: 'PATCH',
            body: JSON.stringify({
                organisation_id: orgId
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((r) => console.log(r.json()))
        .then((data) => console.log(data))
        
    }
    
    return (
        <div>
            
            <h4>{orgData.name}</h4>
            <button onClick={(e) =>  setShowEditForm({show:true, org: orgData})}>Edit</button>
            <form onSubmit={submitHandler}>
                <button type="submit" onClick={(e) => setOrgId(orgData.id)}>Join</button>
            </form>
        </div>
    )
}

export default OrgCard