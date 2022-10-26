import React, {useState} from "react";

function NameForm (props){
    const [value, setValue] = useState('');
    
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('name : ' + value);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                name : 
                <input type="text" value={value} onChange={handleChange}/>
            </label>
            <button type="submit">Submit</button>
        </form>
    )


}

export default NameForm_test;