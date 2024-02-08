import React, { useEffect, useState } from "react";
import './index.css'

export default function ClientOldMessage({ message }) {
    const formattedMessage = message.replace(/ /g, '\u00a0')
         
    return (
        <div className="old-message-box">
            <p className="message-old-client" style={{ whiteSpace: 'pre-line' }}>{formattedMessage}</p>
        </div>
    );
}