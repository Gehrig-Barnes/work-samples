import React, { useState } from "react";

function CreateOrg(){
    const [newOrg, setNewOrg] = useState({
        name: '',
        hourly_rate: 0
    })

    return (
        <div>
            <h1>Create an Org</h1>
            <form>
                <label>name: </label>
                <input type="text"/><br></br>
                <label>Hourly Rate: $</label>
                <input type="number"/>
                <input type="submit" value="create and join"/>
            </form>
        </div>
    )
}

export default CreateOrg