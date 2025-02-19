import { useState } from 'react'
import './BaiTap02.css'
export default function BaiTap02(){
    const [a, setSoA] = useState('');
    const [b, setSoB] = useState('');
    const [rs, setResult] = useState(0);

    function handleChangeA(e){
        setSoA(e.target.value);
    }

    function handleChangeB(e){
        setSoB(e.target.value);
    }

    function handleClick(){
        setResult(parseFloat(a) + parseFloat(b));
    }

    return(
        <div>
            <input placeholder='Nhập A' onChange={handleChangeA} value={a} type="text" />
            <br />
            <input placeholder='Nhập B' onChange={handleChangeB} value={b} type="text" />
            <br />
            <button onClick={handleClick}>Plus</button>
            <br />
            <span>{rs}</span>
        </div>
    );
}