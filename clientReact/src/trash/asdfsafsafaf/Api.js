import axios from 'axios';
// import store from '@/store/store'
export default (props)=>{
    if(props){
        return axios.create({baseURL:`http://localhost:8081/`, headers: {Authorization: `Bearer ${props.token}`}}) 
    }else{
        return axios.create({baseURL:`http://localhost:8081/`}) 
    }
}

 