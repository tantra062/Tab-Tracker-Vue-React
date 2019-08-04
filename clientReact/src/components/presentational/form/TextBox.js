import React from 'react';

const Text = ({name, value, label, handleChange}) =>{
    return(
        <div className="row">
            <div className="input-field col s12">
                <input type="text" name={name} value={value} className="validate" onChange={handleChange} />
                <label className="active" htmlFor={label}>{label}</label>
            </div>
        </div>
    )
}
export default Text;