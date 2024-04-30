import React, { useEffect, useState } from "react";
import { Message } from "../model/Message";
import { SingleMessage } from "./SingleMessage";

export function Feed () {
    /**
     * Props are immutable properties of a component that are passed in when a
     * component is mounted onto the site, and can not be changed
     * 
     * State are a mutable variable inside a compenent that will trigger a
     * refresh of the component when the state's update function is invoked
     */
    let [messageState, setMessageState] = useState<Message[]>([]);
    useEffect(()=>{getFeedDataHandler()}, []);
    function getFeedDataHandler(){
        fetch("https://641496c8e8fe5a3f3a0ad56a.mockapi.io/api/message")
        .then(result => {return result.json()})
        .then(json => {setMessageState(json)})
        .catch(exception => {console.log(exception)})
    }
    function getMessageConditionRendering(){
        if(messageState.length == 0){
            return <p>there are no messages</p>
        }else{
            return <p>{messageState.toString()}</p>
        }
    }
    return (
        <>
            <h1>Feed component</h1>
            {messageState.map(message => 
                {return <SingleMessage key={message.message_id} data={message}></SingleMessage>}
                )}
            <button onClick={getFeedDataHandler}>Click to refresh the feed</button>
        </>
    )
}