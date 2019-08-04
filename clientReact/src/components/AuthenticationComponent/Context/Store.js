import React, { useReducer, useEffect } from 'react';
import AuthContext from './Context';
import { authReducer, AUTH_LOGIN, AUTH_LOGOUT,  IS_LOGGED_IN } from './Reducer';


const Store = (props) =>{
    const prev = JSON.parse(window.localStorage.getItem('login')) || {isLoggedIn:false, error:''};
    window.localStorage.setItem('login', JSON.stringify(prev));

    const [ authenticationState, dispatch ] = useReducer(authReducer, prev);
    
    const authLogin = (credentials) =>{
        dispatch({ type: AUTH_LOGIN, credentials: credentials });
    };

    const authLogout = () =>{
        dispatch({ type: AUTH_LOGOUT});
    };
    
    return (
        <AuthContext.Provider
            value={
                {
                    session: authenticationState,
                    authLogin: authLogin,
                    authLogout: authLogout
                }
            }>
            {props.children}
        </AuthContext.Provider>
    );
};
export default Store;