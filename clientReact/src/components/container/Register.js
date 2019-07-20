import React, { useState } from 'react';
import Text from "../presentational/form/TextBox";
import Password from "../presentational/form/Password";
import AuthenticationService from "../../services/AuthenticationService";


const Register = ()=>{
    const [register, setRegister] = useState({email:"", password:""})
    const [error, setError] = useState([])

    const handleChange= (e)=>{
        const { name, value } = e.target;
        setRegister((state)=>({...state,
            [name] : value
        }))
    }
    const onSubmit = async (e)=>{
        e.preventDefault()
        try{
            const response = (await AuthenticationService.register(register)).data
            setRegister(()=>({
                ...response,
                isLoggedIn: true
            }))
        }catch(err){
            errorHandler(err.response.data)
        }
    }
    const errorHandler = (err) =>{
        setError((state) =>({
            ...state, "error": err.error
        }))
    }
    return(
        <form onSubmit={onSubmit}> 
            <Text name="email" value={register.email} label="Email" handleChange={handleChange} />
            <Password name="password" value={register.password} label="Password" handleChange={handleChange} />
            <div className ="row">
                <div className="col l12">
                    <span id="error" className="error">{error.error}</span>
                </div>
            </div>
            <div className ="row">
                <div className="col l12">
                    <button type="submit">Register</button>
                </div>
            </div>
        </form>
    )
}

export default Register