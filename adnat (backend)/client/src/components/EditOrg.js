import React, {useEffect, useState} from 'react'


function EditOrg({setShowEditForm, org}){
    // const [organization, setOrganization] = useState(null);
    const [orgData, setOrgData] = useState({
        name: org.name,
        hourly_rate: org.hourly_rate
    })

    const inputHandler = (e) => setOrgData((prev) => {
        return {
            ...prev,
            [e.target.name]: e.target.value,
        }
    })

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(orgData);
    }
    // TODO
    // - Wire up the hourly rate input
    // - GO TO BACKEND ****
    // - fill out the submit handler "fetch"
    // - id, METHOD, HEADERS, BODY,
    // - console.log the whole req 

    console.log(org)

      
    return (
        <>
            <div>where we edit an {org?.name}</div>
            <form onSubmit={submitHandler}>
                <label>Name:</label>
                <input type="text" name="name" value={orgData.name} onChange={inputHandler}/>
                <label>Hourly Rate</label>
                <input type="number" name="hourly_rate" value={orgData.hourly_rate} onChange={inputHandler}/>
                <button onClick={() => setShowEditForm({show:false, org:null})}>cancel</button>
                <input type="submit" value="update"/>
            </form>
            
        </>
        

    )
}

export default EditOrg