export const AUTH_LOGIN = ' AUTH_LOGIN';
export const AUTH_LOGOUT = ' AUTH_LOGOUT';

export const authReducer = ( state, action ) => {
    switch( action.type ) {
        case AUTH_LOGIN:
            return authLogin(action , state);
        case AUTH_LOGOUT:
            return authLogout(action, state);
        default:
            return state;
    }
}

// "email": "admin@gmail.com",
// "password": "12345678"

const authLogin = (action, state) =>{
    const res = {isLoggedIn:true, state, ...action.credentials}
    // window.localStorage.setItem('login', JSON.stringify(res))
    return {...state, ...res}
}

const authLogout = (action, state) =>{
    try{
        window.localStorage.removeItem('login')
        const result = {isLoggedIn: false, error:''};
        return result
    }catch(e){
        return e
    }
}
