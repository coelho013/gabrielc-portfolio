import React from "react";
import './index.css';

export default function ClientInput({ handleChange, inputValue, detectEnter }) {
    
    return(
        <input
        className="input-client"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={detectEnter}
        />
    )
}