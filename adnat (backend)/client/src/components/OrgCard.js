import React, { useState } from "react";

function OrgCard ({ orgData, setShowEditForm, userId, setUser}){
    

    const joinOrgHandler = (orgId) => {
        fetch(`/join/${userId}`, {
            method: 'PATCH',
            body: JSON.stringify({
                organisation_id: orgId
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((r) => r.json())
        .then((data) => setUser(data))
    }
    
    return (
        <div>
            
            <h4>{orgData.name}</h4>
            <button onClick={(e) =>  setShowEditForm({show:true, org: orgData})}>Edit</button>
            <button onClick={(e) => joinOrgHandler(orgData.id)}>Join</button>

        </div>
    )
}

export default OrgCard