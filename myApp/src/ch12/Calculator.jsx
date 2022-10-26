import React, {useState} from "react";
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props){
    if(props.celsius >= 100){
        return <p>Now boiling!!</p>;
    }
    return <p>Not boiling...</p>;
};

// f => c
function toCelsius(fahrenheit){
    return ((fahrenheit - 32) * 5) / 9;
}

// c => f
function toFahrenheit(celsius){
    return ((celsius * 9) / 5) + 32;
}

// 온도와 섭씨와 화씨 간 변환 함수를 파라미터로 받음
function tryConvert(temperature, convert){
    const input = parseFloat(temperature);
    if(Number.isNaN(input)){ // 예외처리
        return "";
    }
    const output = convert(input); // 파라미터로 받은 함수에 따라 온도 변환
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function Calculator(props){
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    // 섭씨 빈칸에 입력했을 때 => temperature state에 값 저장, scale state 섭씨로 변환
    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c")
    }

    // 화씨 빈칸에 입력했을 때 => temperature state에 값 저장, scale state 화씨로 변환
    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    }

    // 빈칸은 사용자가 입력한 값이 보여지는 게 아니라 변화된 값에 대해 바뀐 state 값이 렌더링 되는 것
    // 각각의 섭씨와 화씨 빈칸의 값을 정의하는 변수 => 자신의 scale이 아니면 tryconvert 함수로 변환, 맞으면 그대로 저장
    const celsius = scale === 'f'? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c'? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        // scale => legend 태그에 입력
        // temparature => 해당하는 scale로 변환된 값이 렌더링
        // onTemperatureChange => 입력값 변화에 따른 state 변환 함수 호출
        // 각각의 TemperatureInput 컴포넌트가 temperature이라는 같은 state를 공유하기 위해 해당 state를 상위 컴포넌트로 끌어올림
        <div>
            <TemperatureInput scale='c' temperature={celsius} onTemperatureChange={handleCelsiusChange} />
            <TemperatureInput scale='f' temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );

}

export default Calculator;

