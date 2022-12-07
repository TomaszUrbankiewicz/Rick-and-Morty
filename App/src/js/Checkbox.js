import React, { useEffect } from 'react';

const Checkbox = ({ api_answer }) => {

    return (
        <div className='box_check'>
            <label className="container">
                <input type="checkbox" />
                <span className="custom-check"></span>
            </label>
            
        </div>
    );
}

export default Checkbox