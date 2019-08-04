import React, { useContext, useEffect, useState } from 'react';
import AuthContext from "../Context/Context";

const Logout = (props)=>{
    const { authLogout } = useContext(AuthContext);
    const [count, setCount] = useState(5)
    
    useEffect(() => {
        authLogout()
        let interval = null;
        interval = setInterval(() => {
            setCount(count => count - 1);
        }, 1000);

        (count === 0)&&props.history.push(`/song`)
        return () => clearInterval(interval);
    }, [count, props.history]);
    return(
        <>
        <h2>You Successfully Logged Out!</h2>
        <p>You'll be redirected at song list page at <span>{count}</span></p>
        </>
    )
}

export default Logout