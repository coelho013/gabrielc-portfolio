import handleOldMessage from "./handleOldMessage";
import handleVerifyDir from "./handleVerifyDir";

const handleVerifyMessage = (
    setOldMessage,
    help,
    setDir,
    oldDir,
    oldPath,
    dir,
    setOldDir,
    setOldPath,
    setOriginaltextareaValue,
    setInitTab,
    setActualIndex,
    textareaValue,
    setTextareaValue,
    textareaLength,
    setTextareaLength
) => {
    setActualIndex(0);
    setInitTab(0);
    setOriginaltextareaValue('');
    
    const textareaClear = textareaValue.toLowerCase().trim().substring(textareaLength);
    const newTextarea = textareaValue.substring(textareaLength);

    if (textareaClear === 'cls') {
        setOldMessage('');
    }else if (textareaClear === 'help') {
        const helpResponse = help.map(element => {
            const quantitySpaces = (10 - element.name.length)
            const spaces = ' '.repeat(quantitySpaces);
            return `${element.name}${spaces}${element.description}`
        }).join('\n')
        handleOldMessage(helpResponse, setOldMessage, textareaValue);
    }else if (textareaClear === 'dir') {
        const dirResponse = dir.map(element => {
            return `01/01/2024 00:00 PM    ${element.type}          ${element.name}`
        }).join('\n');
        handleOldMessage(dirResponse, setOldMessage, textareaValue, textareaValue);
    }else if (textareaClear === 'cd..') {
        setDir(oldDir);
        setTextareaValue(oldPath);
        handleOldMessage('', setOldMessage, textareaValue);
    }else if (textareaClear.startsWith('cd')) {
        handleVerifyDir(textareaClear, dir, setOldDir, setOldPath, setDir, setTextareaValue, textareaValue);
        handleOldMessage('', setOldMessage, textareaValue);
    }else {
        handleOldMessage('', setOldMessage, textareaValue);
    }
    setTextareaValue('');
}

export default handleVerifyMessage;