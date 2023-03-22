import React, { useState } from 'react'

const Authcontext = React.createContext({
    token: '',
    isLoggedIn: false,
    Login: (token) => {},
    logout: () => {}
})

export const AuthcontextProvider = (props) => {
    const [token, SetToken] = useState(null)

    const userLoggedIn = !!localStorage.getItem('token');//it convert true/false to boolean value

    const LoginHandler = (token) => {
        SetToken(token)
        localStorage.setItem('token',token)
    }

    const LogoutHandler = () => {
        SetToken(null)
        localStorage.setItem('token','')
    }
    const contextValue = {
        token: token,
        isLoggedIn: userLoggedIn,
        Login: LoginHandler,
        logout: LogoutHandler
    }

    return <Authcontext.Provider value={contextValue}>
        {props.children}
    </Authcontext.Provider>
}

export default Authcontext
