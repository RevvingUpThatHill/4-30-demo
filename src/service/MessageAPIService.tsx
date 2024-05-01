import { Message } from "../model/Message"

const baseUrl = "https://641496c8e8fe5a3f3a0ad56a.mockapi.io/api/message";

export function postMessageAPI(msg : Message){
    
    return fetch(baseUrl,
        {method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(msg)
        }
    )
}

export function getAllMessageAPI(){
    return fetch(baseUrl);
}