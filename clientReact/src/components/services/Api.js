import axios from 'axios';
// import store from '@/store/store'
export default (props)=>{
    if(props){
        console.log(props.token)
        return axios.create({baseURL:`http://localhost:8081/`, headers: {Authorization: `Bearer ${props.token}`}}) 
    }else{
        console.log('a')
        return axios.create({baseURL:`http://localhost:8081/`}) 
    }
}

 