// import React, {useState, useEffect} from 'react';


// const AuthenticationContext = React.createContext([{}, ()=>{}]);


// const AuthenticationProvider = (props) =>{
//     // const prevAuth = window.localStorage.getItem('login') || false
//     // const [login,setLogin] = useState(JSON.parse(prevAuth)) || false
//     // const a = window.localStorage.getItem('login')
//     // const [login,setLogin] = useState() || false
    
//     const Logout = ()=>{
//         localStorage.clear()
//         setLogin({isLoggedIn: false})
//     }
//     useEffect(()=>{
//         // window.localStorage.setItem('login', JSON.stringify(login))
//     },[login])

//     return (
//         <AuthenticationContext.Provider value={
//             {   
//                 authenticate: [login, setLogin],
//                 login,
//                 Logout
//             }}>
//             {props.children}
//         </AuthenticationContext.Provider>
//     );
// }

// export { AuthenticationContext, AuthenticationProvider };


// // import React, {useState, useEffect} from 'react';

// // const AuthenticationContext = React.createContext([{}, ()=>{}]);

// // const AuthenticationProvider = (props) =>{
// //     const prevAuth = window.localStorage.getItem('login') || false
// //     const [login,setLogin] = useState(JSON.parse(prevAuth)) || false

// //     const Logout = ()=>{
// //         localStorage.clear()
// //         setLogin({isLoggedIn: false})
// //     }
// //     useEffect(()=>{
// //         window.localStorage.setItem('login', JSON.stringify(login))
// //     },[login])

// //     return (
// //         <AuthenticationContext.Provider value={
// //             {   
// //                 authenticate: [login, setLogin],
// //                 login,
// //                 Logout
// //             }}>
// //             {props.children}
// //         </AuthenticationContext.Provider>
// //     );
// // }

// // export { AuthenticationContext, AuthenticationProvider };


