import React from 'react';

const Checkbox = ({name, onChange, value, checked})=>{
    return (
        
        <input type="checkbox" name={name} onChange={onChange} value={value} checked={checked} />
    )
}
export default Checkbox;