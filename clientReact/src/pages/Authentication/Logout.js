import React from 'react';
import LogoutComponent from '../../components/AuthenticationComponent/Form/Logout';

const Logout = (props)=>{
    return(
        <div>
            <LogoutComponent {...props}></LogoutComponent>
        </div>
    )
}

export default Logout