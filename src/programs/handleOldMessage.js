const handleOldMessage = (response, setOldMessage, message, inputValue) => {
    if (response === '') {
        setOldMessage((prevOldMessage) =>
        prevOldMessage === '' ? message + inputValue : prevOldMessage + '\n\n' + message + inputValue
        ); 
    } else {
        setOldMessage((prevOldMessage) =>
        prevOldMessage === '' ? message + inputValue + '\n' + response : prevOldMessage + '\n\n' + message + inputValue + '\n' + response
        );
    }  
}

export default handleOldMessage;