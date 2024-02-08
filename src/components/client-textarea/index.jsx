import './index.css';

export default function ClientTextarea({textareaValue, handleChange, detectKey, handleClick}) {
    return (
        <div className="client-textarea-box">
            <textarea   
                className="client-textarea"
                value={textareaValue}
                onChange={handleChange}
                onKeyDown={detectKey}
                onClick={handleClick}
            />
        </div>
    )
}