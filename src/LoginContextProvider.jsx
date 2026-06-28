import {useState } from "react"
import LoginContext from "../utils/LoginContext";
const LoginContextProvider = function ({children}){
    
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    return (
        <LoginContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
            {children}
        </LoginContext.Provider>
    )

}

export default LoginContextProvider