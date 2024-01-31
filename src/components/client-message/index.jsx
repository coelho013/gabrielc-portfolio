import React, { useEffect, useState } from "react";
import './index.css';
import Typewriter from "../typewriter";
import ClientInput from "../client-input";


export default function ClientMessage({ message, handleChange, inputValue, detectEnter }) {
    
    return(
    <div className="message-client-box">
            <p className="message-client"><Typewriter text={message}/></p>
        <ClientInput handleChange={handleChange} inputValue={inputValue} detectEnter={detectEnter}/>
    </div>
    )
}