import React, { useState, useContext, useEffect } from 'react';
import Text from "../../presentational/form/TextBox";
import Password from "../../presentational/form/Password";
import {loginMiddleware} from "../../../middleware/loginMiddleware";
import AuthContext from "../Context/Context";
import useDataApi from "../../../hooks/FetchHandler/useDataApi";


const Register = (props)=>{
    const initialState = { email:"", password:"", firstName: "", lastName:""}
    const [ state, setFetch ] = useDataApi({},[initialState])

    const { session } = useContext(AuthContext);
    const [register, setRegister] = useState(initialState);
    const [error, setError] = useState({isError: false});


    const handleChange= (e)=>{
        const { name, value } = e.target;
        setRegister((state)=>({...state,
            [name] : value
        }))
        setError({isError: false})
    }
    //on submit
    const onSubmit = async(e)=>{
        e.preventDefault()
        setFetch({action:"AUTH", type:"register", payload: { ...register }});
    }
    useEffect(()=>{
        loginMiddleware(session, props)
        if(state.isError === true){
            setError(state)
        }
    },[state.isLoading])
    return(
        <form onSubmit={onSubmit}> 
            <Text name="email" value={register.email} label="Email" handleChange={handleChange} />
            <Password name="password" value={register.password} label="Password" handleChange={handleChange} />
            <div className ="row">
                <div className="col l12">
                    <span id="error" className="error">{(error.isError === true)&& error.data.error}</span>
                    <span id="success" className="success">{register.message}</span>
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