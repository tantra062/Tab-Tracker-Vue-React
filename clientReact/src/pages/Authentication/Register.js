import React from 'react';
import Panel from '../../components/presentational/generic/Panel';
import RegisterForm from '../../components/AuthenticationComponent/Form/Register';

const Register = (props)=>{
    return (<Panel title="Register">
        <RegisterForm {...props} />
    </Panel>
    )
}
export default Register

