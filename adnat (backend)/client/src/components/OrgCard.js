import React, { useEffect, useState } from "react";

function OrgCard ({ orgData, setShowEditForm }){

    
    
    return (
        <div>
            
            <h5>{orgData.name}</h5>
            <button onClick={(e) =>  setShowEditForm({show:true, org: orgData})}>Edit</button>
        </div>
    )
}

export default OrgCard