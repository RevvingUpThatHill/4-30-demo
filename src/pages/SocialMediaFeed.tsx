import React, { useEffect } from "react";
import { NewMessageMenu } from "../component/NewMessageMenu";
import { Feed } from "../component/Feed";

export function SocialMediaFeed(){
    
    return (
        <>
            <h1>Social Media Site</h1>
            <NewMessageMenu></NewMessageMenu>
            <Feed></Feed>
        </>
    )
}