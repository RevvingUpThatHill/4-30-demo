import React, { SyntheticEvent, useEffect, useState } from "react";
import { Message } from "../model/Message";
import { postMessageAPI } from "../service/MessageAPIService";

export function NewMessageMenu() {

    const [inputBoxState, setInputBoxState] = useState<string>("");

    useEffect(()=>{console.log("state has changed: "+inputBoxState)}
    ,[inputBoxState]);

    function updateInputBox(event:SyntheticEvent){
        let target = event.target as HTMLInputElement;
        setInputBoxState(target.value);
        console.log(inputBoxState);
    }

    function submitMessageHandler(){
        let message:Message = {
            message_id:1,
            message_text:inputBoxState,
            time_posted_epoch:0,
            posted_by:0
        }
        postMessageAPI(message);
    }
    return (
        <>
        <input value={inputBoxState} onChange={updateInputBox}></input>
        <button onClick={submitMessageHandler}>submit</button>
        </>
    )
}