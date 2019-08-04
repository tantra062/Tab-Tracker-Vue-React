import React, { useState, useContext, useEffect } from 'react';
import Text from "../../presentational/form/TextBox";
import Password from "../../presentational/form/Password";
import AuthContext from "../Context/Context";
import {loginMiddleware} from "../../../middleware/loginMiddleware"
import useDataApi from "../../../hooks/FetchHandler/useDataApi";


const Login = (props)=>{
    const { authLogin, session } = useContext(AuthContext);
    const initialState = { email:"", password:""}
    
    const [ state, setFetch ] = useDataApi({},[initialState])
    const [login, setLogin] = useState(initialState)
    const [error, setError] = useState({isError: false})
    const handleChange= (e)=>{
        const { name, value } = e.target;
        setLogin((state)=>({...state,
            [name] : value
        }))
        setError({isError: false})
    }
    //on submit
    const onSubmit = async(e)=>{
        e.preventDefault()
        if(login.username !== '' && login.password !== ''){
            setFetch({action:"AUTH", type:"login", payload: { ...login }});
        }
    }
    useEffect(()=>{
        loginMiddleware(session, props)
        if(state.isError === true){
            setError(state)
        }
        if(state.isError === false && state.isLoading === false){
            authLogin(state.data);
            props.history.push('/song');
        }
    },[state.isLoading])
    
    return(
        <form onSubmit={onSubmit}> 
            <Text name="email" value={login.email} label="Email" handleChange={handleChange} />
            <Password name="password" value={login.password} label="Password" handleChange={handleChange} />
            <div className ="row">
                <div className="col l12">
                    <span id="error" className="error">{error.error}</span>
                </div>
            </div>
            <div className ="row">
                <div className="col l12">
                    <button type="submit">Login</button>
                </div>
            </div>
        </form>
    )
}

export default Login