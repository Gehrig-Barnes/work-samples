import React from "react";

//TODO
//CREATE A REQUEST TO THE BACK END TO CREATE AND THEN UPDATE

function CreateOrg(){
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