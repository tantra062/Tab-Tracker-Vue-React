import React from 'react';

const TextArea = (props)=> {
    
    let value = Object.values(props)
    let key = Object.keys(props)
    // console.log(Object.entries(props))
    // const obj = new Map(Object.entries(props))
    // console.log(obj)
    // console.log(`=========End of ${key[0]}=========`)
    return (
        <div className="input-field">
            <textarea id="textarea1" value={value[0]} name={key[0]} className="materialize-textarea" onChange={props.handleChange}></textarea>
        </div>
    )
}
export default TextArea;