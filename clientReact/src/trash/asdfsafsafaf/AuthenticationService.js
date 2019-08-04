import Api from './Api';

export default{
    logincs(){
        return Api().get('login')
    },
    login({email, password}){
        return Api().post('login', {email:email, password:password})
    },
    register(credentials){
        return Api().post('register', credentials)
    }
}
//AuthenticationService.