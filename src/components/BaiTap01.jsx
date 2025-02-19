import { useState } from 'react'
import './BaiTap01.css'
export default function BaiTap01(){
    const [name, setName] = useState('');
    const [text, setText] = useState('');

    function handleChangeName(e){
        setName(e.target.value);
    }

    function handleClick(){
        setText(name);
    }

    return(
        <div>
            <input placeholder='Nhập tên' onChange={handleChangeName} value={name} type="text"/>
            <br />
            <button onClick={handleClick}>Click</button>
            <br />
            <span>{text}</span>
        </div>
    );
}