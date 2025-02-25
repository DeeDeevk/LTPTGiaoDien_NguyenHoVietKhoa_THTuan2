import { useState } from 'react'
import './BaiTap04.css'
export default function BaiTap04(){
    const [nutChon, setNutChon] = useState('Vui lòng ấn các nút trên');

    function handleButton(e){
        setNutChon(e.target.value);
    }

    return(
        <div>
            <button value='Java' onClick={handleButton}>Java</button>
            <button value='Python' onClick={handleButton}>Python</button>
            <button value='JavaScript' onClick={handleButton}>JavaScript</button>
            <button value='PHP' onClick={handleButton}>PHP</button>
            <br />
            <span>{nutChon}</span>
        </div>
    );
}