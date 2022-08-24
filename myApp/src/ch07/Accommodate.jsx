import React, {useState, useEffect} from "react";
import useCounter from "./useCounter";

const max_capacity = 10;

function Accommodate(props){
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    useEffect(()=>{
        console.log("=======================");
        console.log("useEffect() is called");
        console.log(`isFull : ${isFull}`);
    });

    useEffect(()=>{
        setIsFull(count >= max_capacity);
        console.log(`current count value : ${count}`);
    }, [count]);

    return (
        <div style={{padding : 16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>
            <button onClick={increaseCount} disabled={isFull}>Join</button>
            {/* disabled 속성의 값이 true일 때 버튼이 비활성화됨 */}
            <button onClick={decreaseCount}>Out</button>

            {isFull && <p style={{color : "red"}}>Room is full now</p>}
            {/* 위 코드 실행하면 isFull이 true일 때만 뒤 p 태그가 나타남!! 싕기!! */}
        </div>
    );

}

export default Accommodate;