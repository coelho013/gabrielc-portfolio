import React, { useState } from "react";
import './index.css'
import ServerMessage from "../../components/server-initial-message";
import ClientOldMessage from "../../components/client-old-message";
import handleVerifyMessage from "../../programs/handleVerifyMessage";
import handleTabAction from "../../programs/handleTabAction";
import ClientTextarea from "../../components/client-textarea";

export default function Terminal() {
    const [oldPath, setOldPath] = useState('');
    const [oldMessage, setOldMessage] = useState('');
    const [textareaValue, setTextareaValue] = useState('C:\\>');
    const [textareaLength, setTextareaLength] = useState(4);
    const [actualIndex, setActualIndex] = useState(0);
    const [initTab, setInitTab] = useState(0);
    const [originaltextareaValue, setOriginaltextareaValue] = useState('');
    const [oldDir, setOldDir] = useState([])
    const [selectionStartActual, setSelectionStartActual] = useState(0);
    const [selectionEndActual, setSelectionEndActual] = useState(0);
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

    const handleClick = (event) => {
        setSelectionStartActual(event.target.selectionStart);
        setSelectionEndActual(event.target.selectionEnd);
        console.log('start: ',event.target.selectionStart,', ','end: ', event.target.selectionEnd);
    }

    const handleChange = (v) => {
        if (v.target.value === '') {
            setTextareaValue('C:\\>')
        } else {
            setTextareaValue(v.target.value);
            setOriginaltextareaValue(v.target.value);
        }
    }

    const detectKey = (event) => {
        if (event.key === 'Enter') {
            handleVerifyMessage(
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
            );
            setTextareaValue('C:\\>');
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
        } else if (event.key === 'Home') {
            setSelectionStartActual(0);
            setSelectionEndActual(0);
            console.log('start: ',event.target.selectionStart,', ','end: ', event.target.selectionEnd)
        } else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'End') {
            setSelectionStartActual(event.target.selectionStart);
            setSelectionEndActual(event.target.selectionEnd);
            console.log('start: ',event.target.selectionStart,', ','end: ', event.target.selectionEnd)
        } else if (event.key === 'Delete' || event.key === 'Backspace') {
            setSelectionStartActual(event.target.selectionStart);
            setSelectionEndActual(event.target.selectionEnd);
            console.log('start: ',event.target.selectionStart,', ','end: ', event.target.selectionEnd);
            if (event.target.selectionStart <= textareaLength || event.target.selectionEnd <= textareaLength) {
                event.preventDefault();
            }
        } else {
            setSelectionStartActual(event.target.selectionStart);
            setSelectionEndActual(event.target.selectionEnd);
            console.log('start: ',event.target.selectionStart,', ','end: ', event.target.selectionEnd);
                // if (selectionStartActual < textareaLength || selectionEndActual < textareaLength) {
                //     event.preventDefault();
                // }
        }
    }

    return(
        <div className='container'>
            <ServerMessage />
            <ClientOldMessage message={oldMessage} />
            <ClientTextarea 
                handleChange={handleChange} 
                handleClick={handleClick}
                textareaValue={textareaValue} 
                detectKey={detectKey} 
            />
        </div>
    )
}