import React, {useState} from 'react';

const AuthenticationContext = React.createContext([{}, ()=>{}]);

const AuthenticationProvider = (props) =>{
    const [login, setLogin] = useState({email:"", password:"", token:"", isLoggedIn: false});
    return (
        <AuthenticationContext.Provider value={[login, setLogin]}>
            {props.children}
        </AuthenticationContext.Provider>
    );
}

export { AuthenticationContext, AuthenticationProvider };