import React, { useEffect, useState } from "react";
import './index.css'
import ServerMessage from "../../components/server-initial-message";
import ClientMessage from "../../components/client-message";
import ClientOldMessage from "../../components/client-old-message";

export default function Terminal() {
    const [message, setMessage] = useState('C:\\>');
    const [oldMessage, setOldMessage] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [response, setResponse] = useState('');

    const handleChange = (value) => {
        setInputValue(value.target.value);
    }

    const detectEnter = (event) => {
        if (event.keyCode === 13) {
            handleVerifyMessage();
        }
    }



    const handleVerifyMessage = () => {
            const inputValueClear = inputValue.toLowerCase().trim();
        
            console.log(inputValueClear, 'input value')
            if (inputValueClear === 'cls') {
                setOldMessage('');
            } else if (inputValueClear === 'help') {
                setResponse('response');
            }

            setOldMessage((prevOldMessage) =>
                prevOldMessage === '' ? message + inputValue : prevOldMessage + '\n\n' + message + inputValue
            );
            setInputValue('');
    }

    useEffect(() => {
        console.log('oldMessage atualizado:', oldMessage);
    }, [oldMessage]);


    return(
        <div className='container'>
            <ServerMessage />
            <ClientOldMessage message={oldMessage} />
            <ClientMessage message={message} handleChange={handleChange} inputValue={inputValue} detectEnter={detectEnter}/>
        </div>
    )
}