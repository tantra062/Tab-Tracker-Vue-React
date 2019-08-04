import React, { useState, useContext, useEffect } from 'react';
import Text from "../../presentational/form/TextBox";
import Password from "../../presentational/form/Password";
import AuthContext from "../Context/Context";
import {loginMiddleware} from "../../../middleware/loginMiddleware"

import useDataApi from "../../../hooks/FetchHandler/useDataApi";
import { AUTH_LOGIN } from '../Context/Reducer';


const Login = (props)=>{
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
        // authLogin(login)
        // const result = await session;
        // if (result.isLoggedIn){
        //     props.history.push(`/song`)
        // }
        setFetch({action:"AUTH", type:"login", payload: { ...login }});
    }
    // const checkError= async(red)=>{
    //     const result = await red;
    //     if(result.error && result.isLoggedIn === false){
    //         setError((prev)=>({...prev, error:result.error}))
    //     }
    // }
    useEffect(()=>{
        // loginMiddleware(session, props)
            console.log(state)
            // checkError(session)
        if(state.isError === true){
            setError(state)
            console.log(state)
        }
        if(state.isError === false && state.isLoading === false){
            AUTH_LOGIN()
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