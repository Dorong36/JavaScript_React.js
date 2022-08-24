import React from "react";
import Comment from './Comment';

const comments = [
    {
        name : "Do Yeong",
        comment : "Hello React!!"
    },
    {
        name : "Winter",
        comment : "Life's too short!!"
    },
    {
        name : "Karina",
        comment : "I'm on the Next Level"
    }
]

function CommentList(props){
    return(
        <div>
            {
                comments.map((comments) => {
                    return(
                        <Comment name={comments.name} comment={comments.comment}/>
                    );
                })
            }
            
        </div>
    )
}

export default CommentList;