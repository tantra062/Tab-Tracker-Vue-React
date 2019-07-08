import Api from '@/services/Api';

export default{
    logincs(){
        return Api().get('login')
    },
    login(credentials){
        return Api().post('login', credentials)
    },
    register(credentials){
        return Api().post('register', credentials)
    }
}
//AuthenticationService.