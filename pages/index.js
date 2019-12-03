import React, { useState } from 'react';

const InputElement = () => {
    const [input, setInput] = useState('');
    const [historyList, setHistoryList] = useState([])

    const onChange = (e) => {
        setInput(e.target.value)
        setHistoryList([...historyList, e.target.value])
    }

    return (
        <div>
            <input onChange={onChange} placeholder="Enter Some Text" />
            <ul>
                {historyList.map(item => <li key={item}>{item}</li>)}
            </ul>
        </div>
    )
}

export default InputElement; 