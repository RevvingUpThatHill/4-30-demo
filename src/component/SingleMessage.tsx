import React from "react";
import { Message } from "../model/Message";

interface propsInterface {
    data:Message
}

export function SingleMessage(props:propsInterface){
    return(
        <>
        <h3>{props.data.message_text}</h3>
        <p>{props.data.time_posted_epoch}</p>
        </>
    )
}