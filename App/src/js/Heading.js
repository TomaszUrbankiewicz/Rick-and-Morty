
import React from 'react';


const Heading = () => {
    return (
        <section className='box_heading'>
            <h1>Characters</h1>
            <form className='box_inputs'> 
                <div class="pseudo-search">
                    <input type="text" placeholder="Search..." autofocus required />
                    <button class="fa fa-search" type="submit"></button>
                </div>
                <div className='pseudo-selekt'>
                    <select name="pets" id="pet-select">
                        <option value="">Species</option>
                        <option value="human">Human</option>
                        <option value="alien">Alien</option>
                    </select>
                </div>
            </form>
        
        </section>
    );
}

export default Heading