import React, {useState} from "react";
import Card from "./Card";

function ProfileCard(props){
    return (
        <Card title = "Winter" backgroundColor="Gold">
            <p>에스파는 나야</p>
            <p>둘이 될 수 없어</p>
            <p>Containment</p>
        </Card>
    )
};

export default ProfileCard;