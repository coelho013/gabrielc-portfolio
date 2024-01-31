import React, { useEffect, useState } from "react";
import './index.css'

export default function ClientOldMessage({ message }) {

    return (
        <div className="old-message-box">
            <p className="message-old-client" style={{ whiteSpace: 'pre-line' }}>{message}</p>
        </div>
    );
}