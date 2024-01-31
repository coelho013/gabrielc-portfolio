import React, { useEffect, useState } from "react";

export default function Typewriter({ text }) {
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      if (index < text.length) {
        const timer = setTimeout(() => {
          setDisplayText((prevText) => {
            const char = text[index];
  
            if (char === '\n') {
              return prevText + '\n';
            }
  
            return prevText + char;
          });
  
          setIndex((prevIndex) => prevIndex + 1);
        }, 40);
  
        return () => clearTimeout(timer);
      }
    }, [text, index]);
  
    return <div style={{ whiteSpace: 'pre-line' }}>{displayText}</div>;
  };