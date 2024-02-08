const handleOldMessage = (response, setOldMessage, textareaValue) => {
    if (response === '') {
        setOldMessage((prevOldMessage) =>
        prevOldMessage === '' ? textareaValue  : prevOldMessage + '\n\n' + textareaValue 
        ); 
    } else {
        setOldMessage((prevOldMessage) =>
        prevOldMessage === '' ? textareaValue  + '\n' + response : prevOldMessage + '\n\n' + textareaValue + '\n' + response
        );
    }  
}

export default handleOldMessage;