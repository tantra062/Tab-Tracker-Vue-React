import React from 'react';

const Password = ({name, value, label, handleChange}) =>{
    return(
        <div className="row">
            <div className="input-field col s12">
                <input type="password" name={name} value={value} className="validate" onChange={handleChange} />
                <label className="active" htmlFor={label}>{label}</label>
            </div>
        </div>
    )
}
export default Password;