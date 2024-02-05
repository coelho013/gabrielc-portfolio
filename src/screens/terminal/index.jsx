import React, { useEffect, useState } from "react";
import './index.css'
import ServerMessage from "../../components/server-initial-message";
import ClientMessage from "../../components/client-message";
import ClientOldMessage from "../../components/client-old-message";
import handleVerifyMessage from "../../programs/handleVerifyMessage";
import handleTabAction from "../../programs/handleTabAction";

export default function Terminal() {
    const [message, setMessage] = useState('C:\\>');
    const [oldPath, setOldPath] = useState('');
    const [oldMessage, setOldMessage] = useState('');
    const [textareaValue, setTextareaValue] = useState('');
    const [textareaLenght, setTextareaLenght] = useState(4);
    const [actualIndex, setActualIndex] = useState(0);
    const [initTab, setInitTab] = useState(0);
    const [originaltextareaValue, setOriginaltextareaValue] = useState('');
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
                subdirectory : [
                    {
                        name: 'personal-portfolio',
                        type: '<DIR>',
                        content: '',
                        subdirectory : [{}]
                    }
                ]
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
        console.log(value.target.value, 'chegou no handlechange')
        setTextareaValue(value.target.value);
        setOriginaltextareaValue(value.target.value);
        if (value.target.value.endsWith('')) {
            setInitTab(0);
        }
    }

    const detectKey = (event) => {
        if (event.key === 'Enter') {
            handleVerifyMessage(
                textareaValue,
                setOldMessage,
                help,
                setDir,
                oldDir,
                setMessage,
                oldPath,
                dir,
                setOldDir,
                setOldPath,
                message,
                setTextareaValue,
                setOriginaltextareaValue,
                setInitTab,
                setActualIndex
            );
        } else if (event.key === 'Tab') {
            event.preventDefault();
            handleTabAction(
                setTextareaValue,
                textareaValue,
                originaltextareaValue,
                dir,
                dir.length,
                initTab,
                actualIndex,
                setActualIndex,
                setInitTab
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
                textareaValue={textareaValue} 
                detectKey={detectKey}/>
        </div>
    )
}