import React, { SyntheticEvent, useContext, useState } from "react";
import { UserContextChanger } from "../App";
export function LoginPage(){
    const [inputState, setInputState] = useState("");
    let setUserContextFunction = useContext(UserContextChanger);
    function inputBoxChangeHandler(event:SyntheticEvent){
        let box = event.target as HTMLInputElement;
        setInputState(box.value);
    }
    function submitUsername(){
        setUserContextFunction(inputState);
    }

    return (<>
    <h1>Login page component</h1>
    <input value = {inputState} onChange = {inputBoxChangeHandler}></input>
    <button onClick={submitUsername}></button>
    </>)
}