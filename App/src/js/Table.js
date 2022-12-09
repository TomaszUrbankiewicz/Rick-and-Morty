import React, { useEffect } from 'react';
import Checkbox from './Checkbox';
import alive from  '../img/check_circle.png'
import unknown from  '../img/help.png'
import dead from  '../img/error.png'


const Table = ({ api_answer }) => {

    useEffect(()=>{
        console.log(api_answer)
    },[])

    const markAll = (e) => {
        let all_checkbox = document.querySelectorAll('input[type=checkbox]')
        all_checkbox.forEach(el =>{
            if (el.checked != e.target.checked){
                el.click()
            }
        })
    }

    return (
        <div className='table'>
            <div className='table_column title'>
                <div className='box box_chec'><div className='cheker'><Checkbox name='all' event={markAll}/></div></div>
                <div className='box'><span>Name</span></div>
                <div className='box'><span>Avatar</span></div>
                <div className='box'><span>Origin</span></div>
                <div className='box'><span>Gender</span></div>
                <div className='box'><span>Status</span></div>
            </div>
            <div className='divider'></div>
            {api_answer.results.map((el,id)=>{
                return(
                    <div key={`row-${id}`}>
                        <div className={`table_column characters  ${(el.status == 'Dead') && 'dead'}` }>
                            <div className='box box_chec'><div className='cheker'><Checkbox/></div></div>
                                <div className='box'>
                                    <span className='name'>{el.name}</span>
                                    <span className='species'>{el.species}</span>
                                </div>
                            <div className='box'>
                                <div className='box_avatar'> 
                                    <div className='avatar' style={{backgroundImage: `url(${el.image})`}}></div>
                                </div>
                            </div>
                            <div className='box'>
                                <span className={`${(el.origin.name == 'unknown') && 'unknown'}` }>{el.origin.name}</span>
                                <span></span>
                            </div>
                            <div className='box'>
                                <span>{el.gender}</span>
                                <span></span>
                            </div>
                            <div className='box'>
                                <span> <img className='test' src={(el.status == 'Alive') ? alive : (el.status == 'Dead') ? dead : unknown}></img>{el.status}</span>
                                <span></span>
                            </div>
                        </div>
                        <div className='divider'></div>
                    </div>
                    
                    
                )
            })}
        </div>
    );
}

export default Table