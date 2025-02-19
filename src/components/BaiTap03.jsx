import { useState } from 'react'
import './BaiTap03.css'
export default function BaiTap03() {
    const [a, setSoA] = useState('');
    const [b, setSoB] = useState('');
    const [select, setSelect] = useState('+');
    const [rs, setResult] = useState(0);
    function handleChangeA(e) {
        setSoA(e.target.value);
    }

    function handleChangeB(e) {
        setSoB(e.target.value);
    }

    function handleClick() {
        if(select === '+'){
            setResult(parseFloat(a) + parseFloat(b));
        }
        if(select === '-'){
            setResult(parseFloat(a) - parseFloat(b));
        }
        if(select === '*'){
            setResult(parseFloat(a) * parseFloat(b));
        }
        if(select === '/'){
            setResult(parseFloat(a) / parseFloat(b));
        }
    }

    function handleSelect(e) {
        setSelect(e.target.value);
    }
    return (
        <div>
            <input placeholder='Nhập A' onChange={handleChangeA} value={a} type="text" />
            <br />
            <input placeholder='Nhập B' onChange={handleChangeB} value={b} type="text" />
            <br />
            <input className="nut" onChange={handleSelect} type="radio" name='gr' value='+' /><span>+</span>
            <input className="nut" onChange={handleSelect} type="radio" name='gr' value='-' /><span>-</span>
            <input className="nut" onChange={handleSelect} type="radio" name='gr' value='*' /><span>*</span>
            <input className="nut" onChange={handleSelect} type="radio" name='gr' value='/' /><span>/</span>
            <br />
            <button onClick={handleClick}>Calc</button>
            <br />
            <span>{rs}</span>
        </div>
    );
}