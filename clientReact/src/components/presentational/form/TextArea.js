import React from 'react';
// import PropTypes from 'prop-types';

const TextArea = ({name, label, value, handleChange}) =>{
    return (
        <div>
            <label htmlFor={label}>{label}
                <textarea className="materialize-textarea" name={name} value={value} cols='100' rows='10' onChange={handleChange} />
            </label>
        </div>
    )
}
export default TextArea