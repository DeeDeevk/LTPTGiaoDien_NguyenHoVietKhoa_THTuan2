import React, { useState } from 'react';
import './BaiTap05.css';

export default function BaiTap05 () {
    const [congViec, setCongViec] = useState("");
    const [danhSach, setDanhSach] = useState([]);

    function handleInputChange(e){
        setCongViec(e.target.value);
    }

    function handleAddToList(){
        if(congViec.trim() != ""){
            setDanhSach([...danhSach, congViec]);
            setCongViec("");
        }
    }
    
    function handleDelete(index){
        const danhSachMoi = danhSach.filter((_, i) => i != index);
        setDanhSach(danhSachMoi);
    }

    return (
        <div>
            <input value={congViec} onChange={handleInputChange} placeholder='Thêm các công việc cần làm' type="text"/>
            <button onClick={handleAddToList} >Thêm</button>
            <ul>
                {danhSach.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={()=>handleDelete(index)}>Xóa</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

