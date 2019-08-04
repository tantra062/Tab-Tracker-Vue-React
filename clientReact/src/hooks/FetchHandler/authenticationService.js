export const authentication = async () =>{
    switch( action.type ){
        case login:
            try{
                const response = (await AuthenticationService.login(action.credentials)).data
                window.localStorage.setItem('login', JSON.stringify(res))
                return response
            }catch(e){
                console.log(e)
                return e
            }
        case logout:
            try{
                window.localStorage.removeItem('login')
                const result = {isLoggedIn: false, error:''};
                return result
            }catch(e){
                return e
            }
        case register:
            try{
                //thinking a way to flash a message after registration success
                const result = (await AuthenticationService.register(action.payload)).data
                const res = {isLoggedIn:false, message: "Registered Sucessfuly!", ...result}
                console.log(result)
                console.log(res)
                return {...state, ...res}
            }catch(e){
                const newState = await state;
                const {...error } = e.response.data
                console.log(error)
                return {...newState, ...error}
            }
        default:
            console.log('error')
            return
    }
}