import React, { useEffect, useState } from "react";

function OrgCard ({name}){
    console.log(name)
    return (
        <div>
            <ul>
                <li>{name}</li>
            </ul>
        </div>
    )
}

export default OrgCard