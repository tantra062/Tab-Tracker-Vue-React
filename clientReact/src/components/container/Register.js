import React, { useState } from 'react';
import Text from "../presentational/form/TextBox";
import Password from "../presentational/form/Password";
import Panel from "../presentational/generic/Panel";

const Register = ()=>{
    const [register, setRegister] = useState([{email:"", password:""}])
    const handleChange= (e)=>{
        const { name, value } = e.target;
        setRegister((state)=>({...state,
            [name] : value
        }))
    }
    function onSubmit(){
        console.log(register)
    }
    return(
        <div>
            <Panel title="Register">
                <form onSubmit={onSubmit}> 
                    <Text name="email" value={register.email} label="Email" handleChange={handleChange} />
                    <Password name="password" value={register.password} label="Password" handleChange={handleChange} />
                    <button type="submit">Register</button>
                </form>
            </Panel>
        </div>
    )
}

export default Register