import React, { useState, useContext } from 'react';
import AuthenticationService from "../services/AuthenticationService";
import { AuthenticationContext } from "../context/AuthenticationContext";
import Text from "../presentational/form/TextBox";
import Password from "../presentational/form/Password";
import Panel from "../presentational/generic/Panel";

const Login = ()=>{
    const [login, setLogin] = useState({email:"", password:""})
    const [error, setError] = useState([])
    const [auth, setAuth] = useContext(AuthenticationContext);
    //checks changes and set it to the state.
    const handleChange= (e)=>{
        const { name, value } = e.target;
        setLogin((state)=>({...state,
            [name] : value
        }))
        resetError()
    }
    //on submit
    const onSubmit = async (e)=>{
        e.preventDefault()
        try{
            const response = (await AuthenticationService.login(login)).data
            setAuth(()=>({
                ...response,
                isLoggedIn: true
            }))
        }catch(err){
            errorHandler(err.response.data)
        }
    }
    // if theres an error
    const errorHandler = (err) =>{
        setError((state) =>({
            ...state, "error": err.error
        }))
    }
    // reset error form
    const resetError = ()=>{
        setError([])
    }
    return(
        <div>
            <Panel title="Login">
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
            </Panel>
        </div>
    )
}

export default Login