import React, {useState, useEffect} from 'react';

const AuthenticationContext = React.createContext([{}, ()=>{}]);

const AuthenticationProvider = (props) =>{

    const prevAuth = window.localStorage.getItem('login') || false
    const [login,setLogin] = useState(JSON.parse(prevAuth)) || false
    useEffect(()=>{
        console.log('Pumasok sa useEffect')
        window.localStorage.setItem('login', JSON.stringify(login))
    },[login])

    return (
        <AuthenticationContext.Provider value={
            {   
                authenticate: [login, setLogin],
                login
            }}>
            {props.children}
        </AuthenticationContext.Provider>
    );
}

export { AuthenticationContext, AuthenticationProvider };

// RootContext.js
// import React, { useEffect, useState } from 'react';

// export const RootContext = React.createContext();
// export default ({ children }) => {
//     const prevAuth = window.localStorage.getItem('authenticated') || false;
//     const prevAuthBody = window.localStorage.getItem('authBody') || null;
//     const [authenticated, setAuthenticated] = useState(prevAuth);
//     const [authBody, setAuthBody] = useState(prevAuthBody);
//     useEffect(
//         () => {
//         window.localStorage.setItem('authenticated', authenticated);
//         window.localStorage.setItem('authBody', authBody);
//         },
//         [authenticated, authBody]
//     );
//     const defaultContext = {
//         authenticated,
//         setAuthenticated,
//         authBody,
//         setAuthBody
//     };
//     return (
//         <RootContext.Provider value={defaultContext}>
//         {children}
//         </RootContext.Provider>
//     );
// };