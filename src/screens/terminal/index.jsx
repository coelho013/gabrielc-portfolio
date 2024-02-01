import React, { useEffect, useState } from "react";
import './index.css'
import ServerMessage from "../../components/server-initial-message";
import ClientMessage from "../../components/client-message";
import ClientOldMessage from "../../components/client-old-message";

export default function Terminal() {
    const [message, setMessage] = useState('C:\\>');
    const [oldPath, setOldPath] = useState('');
    const [oldMessage, setOldMessage] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [actualIndex, setActualIndex] = useState(0);
    const [initTab, setInitTab] = useState(0);
    const [originalInputValue, setOriginalInputValue] = useState('');
    const [oldDir, setOldDir] = useState([])
    const [dir, setDir] = useState(
        [
            {
                name: 'profile',
                type: '<DIR>',
                content: '',
                subdirectory: [
                    {
                        name: 'description.txt',
                        type: '     ',
                        content: '',
                        subdirectory: [{}]
                    },
                    {
                        name: 'skills.txt',
                        type: '     ',
                        content: '',
                        subdirectory: [{}]
                    },
                    {
                        name: 'social.txt',
                        type: '     ',
                        content: '',
                        subdirectory: [{}]
                    }
                ]
            }, 
            {
                name: 'projects',
                type: '<DIR>',
                content: '',
                subdirectory : [{}]
            },
            {
                name: 'digital-badges',
                type: '<DIR>',
                content: '',
                subdirectory : [
                    {
                        name: 'aws-badge.txt',
                        type: '     ',
                        content: '',
                        subdirectory: [{}]
                    }
                ]
            }
        ]
    );
    const [help, setHelp] = useState(
        [
            {
                name: 'CD..',
                description: 'Return to the previous path.'
            },
            {
                name: 'CD',
                description: 'Displays the name of or changes the current directory.'
            },
            {
                name: 'CLS',
                description: 'Clears the screen.'
            },
            {
                name: 'DIR',
                description: 'Displays a list of files and subdirectories in a directory.'
            },
            {
                name: 'HELP',
                description: 'Provides Help information for Windows commands.'
            },
            {
                name: 'TYPE',
                description: 'Displays the contents of a text file.'
            }
        ]
    )


    const handleChange = (value) => {
        setInputValue(value.target.value);
        setOriginalInputValue(value.target.value);
        if (value.target.value.endsWith('')) {
            setInitTab(0);
        }
    }

    const detectEnter = (event) => {
        if (event.keyCode === 13) {
            handleVerifyMessage();
            setActualIndex(0);
            setInitTab(0);
            setOriginalInputValue('');
        } else if (event.keyCode === 9) {
            event.preventDefault();
            handleTabAction();
        }
    }

    const handleTabAction = () => {
        setInputValue(() => 
        initTab === 1 ? originalInputValue + dir[handleIndexDir()].name : inputValue.endsWith(' ')  ? originalInputValue + dir[handleIndexDir()].name :  inputValue
        );
    }

    const handleIndexDir = () => {
        const newActualIndex = actualIndex === dir.length - 1 ? 0 : actualIndex + 1;
        setActualIndex(newActualIndex);
        setInitTab(1);

        return newActualIndex;
    }   

    const handleVerifyMessage = () => {
            const inputValueClear = inputValue.toLowerCase().trim();
        
            if (inputValueClear === 'cls') {
                setOldMessage('');
            }else if (inputValueClear === 'help') {
                const helpResponse = help.map(element => {
                    const quantitySpaces = (10 - element.name.length)
                    const spaces = ' '.repeat(quantitySpaces);
                    return `${element.name}${spaces}${element.description}`
                }).join('\n')
                handleOldMessage(helpResponse);
            }else if (inputValueClear === 'dir') {
                const dirResponse = dir.map(element => {
                    return `01/01/2024 00:00 PM    ${element.type}          ${element.name}`
                }).join('\n');
                handleOldMessage(dirResponse);
            }else if (inputValueClear === 'cd..') {
                setDir(oldDir);
                setMessage(oldPath);
                handleOldMessage('');
            }else if (inputValueClear.startsWith('cd')) {
                handleVerifyDir(inputValueClear);
                handleOldMessage('');
            }else {
                handleOldMessage('');
            }
            setInputValue('');
    }

    const handleVerifyDir = (value) => {
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

    const handleOldMessage = (response) => {
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

    useEffect(() => {
        console.log(oldPath, 'old path');
      }, [oldPath]);

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