import React, { useEffect } from 'react';
import Checkbox from './Checkbox';

const Table = ({ api_answer }) => {

    useEffect(()=>{
        console.log(api_answer)
    },[])

    return (
        <div className='table'>
            <div className='table_column title'>
                <div className='box box_chec'><div className='cheker'><Checkbox/></div></div>
                <div className='box'><span>Name</span></div>
                <div className='box'><span>Avatar</span></div>
                <div className='box'><span>Origin</span></div>
                <div className='box'><span>Gender</span></div>
                <div className='box'><span>Status</span></div>
            </div>
            <div className='table_column characters'>
                <div className='box box_chec'><div className='cheker'><Checkbox/></div></div>
                <div className='box'><span>Name</span></div>
                <div className='box'><span>Avatar</span></div>
                <div className='box'><span>Origin</span></div>
                <div className='box'><span>Gender</span></div>
                <div className='box'><span>Status</span></div>
            </div>
        </div>
    );
}

export default Table