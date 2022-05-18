import React from "react";

function EditShift(){
    return (
        <div>
            <form >
        <input
          type="datetime-local"
          name="start"
          required="required"
          placeholder="start"
          
        />
        <input
          type="datetime-local"
          name="finish"
          required="required"
          placeholder="finish"
          
        />
        <input
          type="text"
          name="break"
          required="required"
          placeholder="break(in minutes)"
          
        />
        <input type="submit" value="Create Shift" />
      </form>
        </div>
    )
}

export default EditShift