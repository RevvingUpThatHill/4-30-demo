import React from "react";
import { Link } from "react-router-dom";
export function Navbar(){
    return (
        <>
            <Link to="login">go to login page</Link>
            <Link to="feed">go to feed page</Link>
        </>
    )
}