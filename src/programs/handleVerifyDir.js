const handleVerifyDir = (value, dir, setOldDir, setOldPath, setDir, setMessage, message) => {
    const newValue = value.replace('cd', '').trim();

    const matchingElement = dir.find(element => newValue === element.name);

    console.log(newValue, 'new value')
    
    if (matchingElement) {
        if (matchingElement.type === '<DIR>') {
            setOldPath(message);
            setMessage((prevMessage) => prevMessage === 'C:\\>' ? 'C:\\' + newValue + '>' :  'C:\\' + prevMessage + '\\' + newValue + '>');
            setOldDir(dir);
            setDir(matchingElement.subdirectory)
        }
    }
}

export default handleVerifyDir;