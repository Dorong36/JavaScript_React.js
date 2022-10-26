import React from "react";

const scaleName = {
    c: "섭씨",
    f: "화씨",
};

// props로 scale, temparature, onTemparatureChange 받을 예정
function TemperatureInput(props){
    const handleChange = (event) => {
        props.onTemperatureChange(event.target.value)
    };

    return (
        <fieldset>
            <legend>
                Input temparature (scale : {scaleName[props.scale]}) :
            </legend>
            <input type="text" value={props.temperature} onChange={handleChange} />
        </fieldset>
    )
};

export default TemperatureInput;