import React from 'react';

const Checkbox = ({ name, event }) => {
    const Clickcheckbox = (e) => {
        if(event) event(e)
    }

    return (
        <div className='box_check'>
            <label className="container">
                <input name={(name) && name} type="checkbox" onClick={Clickcheckbox} />
                <span className="custom-check"></span>
            </label>
            
        </div>
    );
}

export default Checkbox