import React, { useContext, useEffect } from "react";
import { NewMessageMenu } from "../component/NewMessageMenu";
import { Feed } from "../component/Feed";
import { UserContext } from "../App";

export function SocialMediaFeed(){
    let userContextVariable = useContext(UserContext);
    return (
        <>
            <h1>Social Media Site</h1>
            <h3>You are posting as : {userContextVariable}</h3>
            <NewMessageMenu></NewMessageMenu>
            <Feed></Feed>
        </>
    )
}