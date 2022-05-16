import React, {useEffect, useState} from 'react'


function EditOrg({setShowEditForm, org}){
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

    console.log(org.id)
    const submitHandler = (e) => {
        e.preventDefault()
        fetch(`/organisations/${org.id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                name: orgData.name,
                hourly_rate: orgData.hourly_rate
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((r) => console.log(r.json()))
        .then((data) => console.log(data))
        .then(window.location.reload())
    }
    
    function deleteOrgHandle(){
        fetch(`/organisations/${org.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }

    

      
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
            <button onClick={() => deleteOrgHandle()}>Delete</button>
            
        </>
        

    )
}

export default EditOrg