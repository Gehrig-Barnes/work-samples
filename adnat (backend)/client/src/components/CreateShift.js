import React, {useEffect, useState} from 'react'

function CreateShift (){
    const [newShift, setNewShift] = useState({
        start: "",
        finish: "",
        break: 0
    })

    const handleInput = (e) => setNewShift((prev) => {
        return {
            ...prev,
            [e.target.name]: e.target.value,
        }
    })

    return (
        <div>
            <form>
                <input 
                    type="datetime-local" 
                    name="start" 
                    required="required" 
                    placeholder='start'
                    onChange={handleInput}
                    value={newShift.start}
                />
                <input 
                    type="datetime-local" 
                    name="finish" 
                    required="required" 
                    placeholder='finish'
                    onChange={handleInput}
                    value={newShift.finish}
                />
                <input 
                    type="text" 
                    name="break" 
                    required="required" 
                    placeholder='break(in minutes)'
                    onChange={handleInput}
                    value={newShift.break}
                />
                <input 
                    type="submit" 
                    value="Create Shift"/>
            </form>
        </div>
    )
};

export default CreateShift;