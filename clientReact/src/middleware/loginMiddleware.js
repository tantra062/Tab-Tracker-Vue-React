

////////////////////////////////////////////
/////NEED TO RESEARCH ABOUT MIDDLEWARE//////
////////////////////////////////////////////

export const loginMiddleware = async(session, props) =>{
    const result = await session;
    if (result.isLoggedIn){
        props.history.push(`/song`)
    }
}

