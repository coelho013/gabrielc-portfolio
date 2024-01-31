import React, { useState } from "react";
import './index.css'
import Typewriter from "../typewriter";

export default function ServerMessage() {

    const [message, setMessage] = useState('Gabriel C. Portfolio\nv1.0.0\ntype HELP for more.');
    const [displayText, setDisplayText] = useState('');


    return(
        <div className="message-initial-box">
            <p className="message-initial-server" style={{ whiteSpace: 'pre-line' }}>{message}</p>
        </div>
    )
}