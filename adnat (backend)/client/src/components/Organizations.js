import React, { useEffect, useState } from "react";
import { createRoutesFromChildren } from "react-router-dom";
import OrgCard from './OrgCard'

function Organizations ({user, setShowEditForm}){
    console.log(user.orgs)
    return (
        <div> list of Orgs
            <h2>welcome, {user.name}</h2>
            <p>you aren't a member of any organization. Join an existing one or create a new one.</p>
            <div>
                <h1>Organizations</h1>
                {user.orgs.map((org) => {
                    return (
                        <OrgCard
                            key={org.id}
                            orgData={org}
                            setShowEditForm={setShowEditForm}
                            userId={user?.id}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Organizations