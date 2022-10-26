import React from "react";

const students = [
    {
        id:1,
        name: "winter",
    },
    {
        id: 2,
        name: "karina",
    },
    {
        id:3,
        name: "yena",
    },
    {
        id:4,
        name: "chaewon",
    },
];

function AttendanceBook(props){
    return(
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>
            })}
            {/* 인덱스 키값으로 사용하기
            {students.map((student, index) => {
                return <li key={index}>{student.name}</li>
            })}
            */}
        </ul>
    )
}

export default AttendanceBook;