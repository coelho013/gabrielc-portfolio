import React from "react";
import './index.css';
import ClientTextarea from "../client-textarea";

export default function ClientMessage({ message, handleChange, textareaValue, detectKey}) {
    
    return(
    <div className="message-client-box">
            <p className="message-client">{message}</p>
            <ClientTextarea handleChange={handleChange} textareaValue={textareaValue} detectKey={detectKey}/>
    </div>
    )
}