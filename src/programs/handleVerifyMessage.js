import handleOldMessage from "./handleOldMessage";
import handleVerifyDir from "./handleVerifyDir";

const handleVerifyMessage = (inputValue, setOldMessage, help, setDir, oldDir, setMessage, oldPath, dir, setOldDir, setOldPath, message, setInputValue, setOriginalInputValue, setInitTab, setActualIndex) => {
    setActualIndex(0);
    setInitTab(0);
    setOriginalInputValue('');
    
    const inputValueClear = inputValue.toLowerCase().trim();

    if (inputValueClear === 'cls') {
        setOldMessage('');
    }else if (inputValueClear === 'help') {
        const helpResponse = help.map(element => {
            const quantitySpaces = (10 - element.name.length)
            const spaces = ' '.repeat(quantitySpaces);
            return `${element.name}${spaces}${element.description}`
        }).join('\n')
        handleOldMessage(helpResponse, setOldMessage, message, inputValue);
    }else if (inputValueClear === 'dir') {
        const dirResponse = dir.map(element => {
            return `01/01/2024 00:00 PM    ${element.type}          ${element.name}`
        }).join('\n');
        handleOldMessage(dirResponse, setOldMessage, message, inputValue);
    }else if (inputValueClear === 'cd..') {
        setDir(oldDir);
        setMessage(oldPath);
        handleOldMessage('', setOldMessage, message, inputValue);
    }else if (inputValueClear.startsWith('cd')) {
        handleVerifyDir(inputValueClear, dir, setOldDir, setOldPath, setDir, setMessage, message);
        handleOldMessage('', setOldMessage, message, inputValue);
    }else {
        handleOldMessage('', setOldMessage, message, inputValue);
    }
    setInputValue('');
}

export default handleVerifyMessage;