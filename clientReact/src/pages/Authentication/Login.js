import React from 'react';
import Panel from '../../components/presentational/generic/Panel';
import LoginForm from '../../components/AuthenticationComponent/Form/Login';
// import {LoginForm} from '../../components/container/Login';

const Login = (props)=>{
    
    return (<Panel title="Login">
        <LoginForm {...props} />
    </Panel>
    )
}
export default Login

