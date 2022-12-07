
import React from 'react';

const Heading = ({ changeValue, search_value, select_value, handleSubmit }) => {
    return (
        <section className='box_heading'>
            <h1>Characters</h1>
            <form className='box_inputs' onSubmit={handleSubmit}> 
                <div className="pseudo-search">
                    <input name='search' type="text" placeholder="Search" value={search_value} required  onChange={changeValue}/>
                    <button  className="fa fa-search" type="submit"></button>
                </div>
                <div className='pseudo-selekt'>
                    <select name="select" id="pet-select" value={select_value} onChange={changeValue} type="submit" >
                        <option value="">Species</option>
                        <option value="human">Human</option>
                        <option value="alien">Alien</option>
                        <option value="humanoid">Humanoid</option>
                    </select>
                </div>
            </form>
        
        </section>
    );
}

export default Heading