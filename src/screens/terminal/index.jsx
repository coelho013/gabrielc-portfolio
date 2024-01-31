import React, { useEffect, useState } from "react";
import './index.css'
import ServerMessage from "../../components/server-initial-message";
import ClientMessage from "../../components/client-message";
import ClientOldMessage from "../../components/client-old-message";

export default function Terminal() {
    const [message, setMessage] = useState('C:\\>');
    const [oldMessage, setOldMessage] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [dir, setDir] = useState(['profile', 'projects', 'digital-badges']);
    const [files, setFiles] = useState([]);
    const [indiceAtual, setIndiceAtual] = useState(0);


    const handleChange = (value) => {
        setInputValue(value.target.value);
    }

    const detectEnter = (event) => {
        if (event.keyCode === 13) {
            handleVerifyMessage();
        } else if (event.keyCode === 9) {
            event.preventDefault();
            handleTabAction();
        }
    }

    const handleTabAction = () => {
        console.log(dir.length)
        setInputValue((prevInputValue) => 
            inputValue.endsWith(' ') ? '':  inputValue
        );
    }

    const handleVerifyMessage = () => {
            const inputValueClear = inputValue.toLowerCase().trim();
        
            if (inputValueClear === 'cls') {
                setOldMessage('');
            } else if (inputValueClear === 'help') {
                handleOldMessage('CD..      return to the previous path\nCD        Displays the name of or changes the current directory.\nCLS       Clears the screen.\nDIR       Displays a list of files and subdirectories in a directory.\nHELP      Provides Help information for Windows commands.\nTYPE      Displays the contents of a text file.');
            } else if (inputValueClear === 'dir') {
                handleOldMessage('01/01/2024  00:00 PM    <DIR>          profile\n01/01/2024  00:00 PM    <DIR>          projects\n01/01/2024  00:00 PM    <DIR>          digital-badges')
            }
                else {
                handleOldMessage();
            }
            setInputValue('');
    }

    const handleOldMessage = (response = '') => {
        if (response === '') {
            setOldMessage((prevOldMessage) =>
            prevOldMessage === '' ? message + inputValue : prevOldMessage + '\n\n' + message + inputValue
            ); 
        } else {
            setOldMessage((prevOldMessage) =>
            prevOldMessage === '' ? message + inputValue + '\n' + response: prevOldMessage + '\n\n' + message + inputValue + '\n' + response
            );
        }  
    }

    return(
        <div className='container'>
            <ServerMessage />
            <ClientOldMessage message={oldMessage} />
            <ClientMessage 
                message={message} 
                handleChange={handleChange} 
                inputValue={inputValue} 
                detectEnter={detectEnter}
            />
        </div>
    )
}