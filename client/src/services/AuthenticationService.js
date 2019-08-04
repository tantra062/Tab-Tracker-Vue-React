import Api from '@/services/Api';

export default{
    logincs(){
        return Api().get('login')
    },
    login(credentials){
        console.log(credentials)
        return Api().post('login', credentials)
    },
    register(credentials){
        return Api().post('register', credentials)
    }
}
//AuthenticationService.