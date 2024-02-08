const handleVerifyDir = (value, dir, setOldDir, setOldPath, setDir, setTextareaValue, textareaValue) => {
    const newValue = value.replace('cd', '').trim();

    const matchingElement = dir.find(element => newValue === element.name);

    console.log(newValue, 'new value')
    
    if (matchingElement) {
        if (matchingElement.type === '<DIR>') {
            setOldPath(textareaValue);
            setTextareaValue((prevMessage) => prevMessage === 'C:\\>' ? 'C:\\' + newValue + '>' :  'C:\\' + prevMessage + '\\' + newValue + '>');
            setOldDir(dir);
            setDir(matchingElement.subdirectory)
        }
    }
}

export default handleVerifyDir;