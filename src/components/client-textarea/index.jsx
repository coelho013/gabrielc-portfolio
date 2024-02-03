import './index.css';

export default function ClientTextarea({textareaValue, handleChange, detectKey}) {
    return (
        <div className="client-textarea-box">
            <textarea 
                className="client-textarea"
                value={textareaValue}
                onChange={handleChange}
                onKeyDown={detectKey}
            />
        </div>
    )
}