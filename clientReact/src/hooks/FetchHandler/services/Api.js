import axios from 'axios';

export default (props)=>{
    return axios.create({baseURL:`http://localhost:8081/`, headers: {Authorization: `Bearer ${(props)&&props.token}`}}) 
}

 