import LoginContextProvider from "./LoginContextProvider"
const AppContextProvider = function ({children}) {
    
return (
    <LoginContextProvider>
        {children}
    </LoginContextProvider>
)
    
}

export default AppContextProvider