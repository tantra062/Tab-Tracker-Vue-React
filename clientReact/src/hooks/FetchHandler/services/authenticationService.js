import Api from './Api';

export const authenticationService = async (type, payload)=> {
    let response = null;
    switch (type) {
        case "login":
            try{
                response = (await Api().post('login', payload)).data 
                window.localStorage.setItem('login', JSON.stringify({isLoggedIn:true, ...response}))
                return { data:response, result: "SUCCESS"}
            }catch(e){
                return {...e.response.data, result: "ERROR"}
            }
        case "register":
            try{
                response = (await Api().post('register', payload)).data
                const result = { data:response, result: "SUCCESS"}
                return result
            }catch(e){
                const result = {...e.response.data, result: "ERROR" }
                return result
            }
        default:
            console.log('There are no type.')
            return;
    }
}