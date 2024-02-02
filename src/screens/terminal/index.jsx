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
        setInputValue(value.target.value);
        setOriginalInputValue(value.target.value);
        if (value.target.value.endsWith('')) {
            setInitTab(0);
        }
    }

    const detectEnter = (event) => {
        if (event.keyCode === 13) {
            handleVerifyMessage(inputValue, setOldMessage, help, setDir, oldDir, setMessage, oldPath, dir, setOldDir, setOldPath, message, setInputValue, setOriginalInputValue, setInitTab, setActualIndex);
        } else if (event.keyCode === 9) {
            event.preventDefault();
            handleTabAction(setInputValue, inputValue, originalInputValue, dir, dir.length, initTab, actualIndex, setActualIndex, setInitTab);
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